//Show total on heading
const headingEl = document.querySelector("#showTotal");

//get reference to description element

const inputDescription = document.querySelector("#inputDesc");
const inputElement = document.querySelector("#inputAmount"); // refrence to input amount

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

const text = `Total: ${totalExpense}`

headingEl.textContent = totalExpense;



}
//button reference

const element = document.querySelector("#btnAddExpense");
element.addEventListener("click", addExpenseToTotal, false);



