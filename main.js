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

expenseItem.desc = textDesc;
expenseItem.amount = textAmount;

allExpenses.push(expenseItem);

// add value to totalExpense
totalExpense = totalExpense + expense;

const showText = `Total: ${totalExpense}`

headingEl.textContent = showText;
const allExpensesHTML = allExpenses.map(expense => createListitem(expense)
    );

const joinAllExpensesHTML = allExpensesHTML.join("");
expenseTableEl.innerHTML = joinAllExpensesHTML;
}
const element = document.querySelector("#btnAddExpense");
element.addEventListener("click", addExpenseToTotal, false);


//View Layer
function createListitem( { desc, amount }){
    return `
    <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex flex-column">
                    ${desc}
                        <small class="text-muted">March 11, 2019</small>
                    </div>
                    <div>
                    <span class="px-5">
                    ${amount}
                    </span>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    </div>
						</li>`
}