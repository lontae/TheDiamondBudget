const totalIncome = document.querySelector(".income .value");
const totalSpending = document.querySelector(".spending .value");
const remainingAmount = document.querySelector(".balance .value");
const budgetedAmount = document.querySelector("#budget");
const expense = document.querySelector("#expense");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");

// const chartE1 = document.querySelector("Chart");  //use an Image, it does not have to work 


const incomeAmount = document.getElementById("income-amount-input");
const addIncome = document.querySelector(" .add-income");
const incomeTitle = document.getElementById("income-title-input");

const addExpense = document.querySelector(" .add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");
// buttons - may need to add to html


// variables
let ENTRY_LIST = [];
let balance = 0, income = 0, expense = 0;

const DELETE = "delete", EDIT = "edit";




addIncome.addEventListener("click", function () {
    if (!income.value || incomeAmount.value) return;
    let income = {
        type: "income",
        title: income.value,
        amount: parseFloat(incomeAmount.value),
    }
    ENTRY_LIST.push(income);

    updateUI();
    clearInput([income, incomeAmount]);
});

addExpense.addEventListener("click", function () {
    if (!expense.value || expenseAmount.value) return;
    // if nothing is entered exit the entry
    let expense = {
        type: "expense",
        title: expense.value,
        amount: parseFloat(expenseAmount.value),
    }
    ENTRY_LIST.push(expense);

    updateUI();
    clearInput([expenseTitle, expenseAmount]);
});

function updateUI() {
    income = calculateTotal("income", ENTRY_LIST);
    spending = calculateTotal("Spending", ENTRY_LIST);
    balance = calculateTotal("income", ENTRY_LIST);

    incomeTotalE1.innerHTML = income
    outcomeTotalE1.innerHTML = outcome
    //this will calculate and upate the visual
}

function calculateTotal(type, list) {
    let sum = 0;

    list.forEach(entry => {
        if (entry.type == type) {
            sum += entry.amount;
        }
    })

    return sum;
}
function calculateBalance(income, expense) {
    return income - expense;
}





editIncome.addEventListener("click", function (idx) {
    if (!incomeTitle.value || incomeAmount.value) return;

    ENTRY_LIST[idx].amount = calculateBalance(income.value, expense)
    updateUI();
    clearInput([incomeTitle, incomeAmount]);
})

