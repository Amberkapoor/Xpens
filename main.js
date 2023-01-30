
const headingEl = document.querySelector('#headingTotal');


const inputDescEl = document.querySelector('#inputDesc');


const inputElement = document.querySelector('#inputAmount');


const expenseTableEl = document.querySelector('#expenseTable');


let totalExpense = 0;


headingEl.textContent = totalExpense;
const allExpenses = [];

function addExpenseToTotal() {
    const expenseItem = {};

    const textAmount = inputElement.value;

    const textDesc = inputDescEl.value;

    const expense = parseInt(textAmount, 10);

    expenseItem.desc = textDesc;
    expenseItem.amount = expense;
    expenseItem.moment = new Date();

    allExpenses.push(expenseItem);

    totalExpense = totalExpense + expense;

    
    const someText = `Total: ${totalExpense}`;
    headingEl.textContent = someText;

    renderList(allExpenses);
}
const element = document.querySelector('#btnAddExpense');

element.addEventListener('click', addExpenseToTotal, false);

function getDateString(momento) {
    return momento.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function deleteItem(dateValue) {
    const newArr = allExpenses.filter(expense => expense.moment.valueOf() !== dateValue);
    renderList(newArr);
}

function renderList(arrOfList) {
    const allExpenseHTML = arrOfList.map(expense => createListItem(expense));
    const joinedAllExpenseHTML = allExpenseHTML.join('');
    expenseTableEl.innerHTML = joinedAllExpenseHTML;
}

function createListItem({ desc, amount, moment }) {
    return `
        <li class="list-group-item d-flex justify-content-between">
                <div class="d-flex flex-column">
                    ${desc}
                    <small class="text-muted">${getDateString(moment)}</small>
                </div>
                <div>
                    <span class="px-5">
                        ${amount}
                    </span>
                    <button 
                        type="button" 
                        class="btn btn-outline-danger btn-sm"
                        onclick="deleteItem(${moment.valueOf()})"
                        >
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>
        `;
}