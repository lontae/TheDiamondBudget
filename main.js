const balanceE1 = document.querySelector(".balance .value");
const incomeTotalE1 = document.querySelector(".outcome-total");
const outcomeTotalE1 = document.querySelector(".income-total");
const incomeE1 = document.querySelector("#income");
const expenseE1 = document.querySelector("#expense");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");

const chartE1 = document.querySelector("Chart"); //use an Image, it does not have to work

const incomeAmount = document.getElementById("income-amount-input");
const addIncome = document.querySelector(" .add-income");
const incomeTitle = document.getElementById("income-title-input");

const addExpense = document.querySelector(" .add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");
// buttons - may need to add to html

let ENTRY_LIST = [];
let balance = 0,
  income = 0,
  outcome = 0;

const DELETE = "delete",
  EDIT = "edit";
// variables??

addIncome.addEventListener("click", function () {
  if (!incomeTitle.value || incomeAmount.value) return;
  let income = {
    type: "income",
    title: incomeTitle.value,
    amount: parseFloat(incomeAmount.value),
  };
  ENTRY_LIST.push(income);

  updateUI();
  clearInput([incomeTitle, incomeAmount]);
});

addExpense.addEventListener("click", function () {
  if (!expenseTitle.value || expenseAmount.value) return;
  // if nothing is entered exit the entry
  let expense = {
    type: "expense",
    title: expenseTitle.value,
    amount: parseFloat(expenseAmount.value),
  };
  ENTRY_LIST.push(expense);

  updateUI();
  clearInput([expenseTitle, expenseAmount]);
});

function updateUI() {
  income = calculateTotal("income", ENTRY_LIST);
  outcome = calculateTotal("outcome", ENTRY_LIST);
  balance = calculateTotal("balance", ENTRY_LIST);

  incomeTotalE1.innerHTML = income;
  outcomeTotalE1.innerHTML = outcome;
  //this will calculate and upate the visual
}

function calculateTotal(type, list) {
  let sum = 0;

  list.forEach((entry) => {
    if (entry.type == type) {
      sum += entry.amount;
    }
  });

  return sum;
}
function calculateBalance(income, outcome) {
  return income - outcome;
}

editIncome.addEventListener("click", function (idx) {
  if (!incomeTitle.value || incomeAmount.value) return;

  ENTRY_LIST[idx].amount = calculateBalance(incomeAmount.value, outcome);
  updateUI();
  clearInput([incomeTitle, incomeAmount]);
});
const clickMe = () => {
  function clickMe()
  console.log("bills");
  window.location = "bills.html";
};

