//Show total on heading
const headingEl = document.querySelector("#showTotal");

//get reference to description element

const inputDescription = document.querySelector("#inputDesc");
const inputElement = document.querySelector("#inputAmount"); // refrence to input amount
const expenseTableEl = document.querySelector("#expenseTable"); // ref to table
//Read value
let totalExpense = 0;

//show heading to totalExpense 
headingEl.textContent = totalExpense;

//all data of expenses
const allExpenses = []; 


//button click
function addExpenseToTotal()
{

const expenseItem = {};

//read value
const textAmount = inputElement.value;

// read desc from input
const textDesc = inputDescription.value;

//convert it from text to number
const expense = parseInt(textAmount, 10);   
// object
expenseItem.desc = textDesc;
expenseItem.amount = expense;
expenseItem.moment = new Date();

allExpenses.push(expenseItem);

// add value to totalExpense
totalExpense = totalExpense + expense;

const showText = `Total: ${totalExpense}`

headingEl.textContent = showText;
const allExpensesHTML = allExpenses.map(expense => createListitem(expense));

const joinedAllExpensesHTML = allExpensesHTML.join("");
expenseTableEl.innerHTML = joinedAllExpensesHTML;
}
const element = document.querySelector("#btnAddExpense");
element.addEventListener("click", addExpenseToTotal, false);

//Date Controller Elements
//Get Date
function getDateString(moment) {
     return moment.toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
    })
}

//Delete button work
function deleteItem(dateValue) {
    const newArr = [];
    console.log('delete item was called', dateValue);
    for (let i = 0; i < allExpenses.length; i++) {
        if(allExpenses[i].moment.valueOf() !== dateValue){
           newArr.push(allExpenses[i]);
        }
    }
    const allExpensesHTML = newArr.map(expense => createListitem(expense));
    const joinedAllExpensesHTML = allExpensesHTML.join("");
    expenseTableEl.innerHTML = joinedAllExpensesHTML;
}


//View Layer
function createListitem( { desc, amount, moment }){
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
                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteItem(${moment.valueOf})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    </div>
						</li>`
}