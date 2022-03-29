// const totalIncome = document.querySelector(".income .value");
// const totalSpending = document.querySelector(".spending .value");
// const remainingAmount = document.querySelector(".balance .value");
// const budgetedAmount = document.querySelector("#budget");
// const expense = document.querySelector("#expense");
// const incomeList = document.querySelector("#income .list");
// const expenseList = document.querySelector("#expense .list");

// // const chartE1 = document.querySelector("Chart");  //use an Image, it does not have to work 


// const incomeAmount = document.getElementById("income-amount-input");
// const addIncome = document.querySelector(" .add-income");
// const incomeTitle = document.getElementById("income-title-input");

// const addExpense = document.querySelector(" .add-expense");
// const expenseTitle = document.getElementById("expense-title-input");
// const expenseAmount = document.getElementById("expense-amount-input");
// // buttons - may need to add to html


// // variables
// let ENTRY_LIST = [];
// let balance = 0, income = 0, expense = 0;

// const DELETE = "delete", EDIT = "edit";


// addIncome.addEventListener("click", function () {
//     if (!income.value || incomeAmount.value) return;
//     let income = {
//         type: "income",
//         title: income.value,
//         amount: parseFloat(incomeAmount.value),
//     }
//     ENTRY_LIST.push(income);

//     updateUI();
//     clearInput([income, incomeAmount]);
// });

// addExpense.addEventListener("click", function () {
//     if (!expense.value || expenseAmount.value) return;
//     // if nothing is entered exit the entry
//     let expense = {
//         type: "expense",
//         title: expense.value,
//         amount: parseFloat(expenseAmount.value),
//     }
//     ENTRY_LIST.push(expense);

//   updateUI();
//   clearInput([expenseTitle, expenseAmount]);
// });

// function updateUI() {
//     income = calculateTotal("income", ENTRY_LIST);
//     spending = calculateTotal("Spending", ENTRY_LIST);
//     balance = calculateTotal("income", ENTRY_LIST);

//   incomeTotalE1.innerHTML = income;
//   outcomeTotalE1.innerHTML = outcome;
//   //this will calculate and upate the visual
// }

// function calculateTotal(type, list) {
//   let sum = 0;

//   list.forEach((entry) => {
//     if (entry.type == type) {
//       sum += entry.amount;
//     }
//   });

//   return sum;
// }
// function calculateBalance(income, expense) {
//     return income - expense;
// }

// editIncome.addEventListener("click", function (idx) {
//   if (!incomeTitle.value || incomeAmount.value) return;

//   ENTRY_LIST[idx].amount = calculateBalance(incomeAmount.value, outcome);
//   updateUI();
//   clearInput([incomeTitle, incomeAmount]);
// });
// const clickMe = () => {
//   function clickMe()
//   console.log("bills");
//   window.location = "bills.html";
// };

//     ENTRY_LIST[idx].amount = calculateBalance(income.value, expense)
//     updateUI();
//     clearInput([incomeTitle, incomeAmount]);
// })
const clickMe = (e) => {
  console.log("bills",e.target.value);
  setTimeout(() => {
    window.location.href = e.target.value
  },  4300);
};
const goBackHome = (e) => {
 window.location.href = 'index.html'
 };
 function add(){
  var n1 = parseInt(document.getElementById('n1').value);
  var n2 = parseInt(document.getElementById('n2').value);
  var n3 = parseInt(document.getElementById('n3').value);
  var sum = n1 + n2 + n3;
  document.getElementById("results").innerHTML=sum;
};
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var yourInputValue = document.getElementById("yourInput").value;
    var t = document.createTextNode(inputValue);
    var p = document.createTextNode(yourInputValue);
    li.appendChild(t);
    li.appendChild(p);
    if (inputValue === '') {
        alert("I think you're missing something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("yourUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
calculate = function()
{
    var resources = document.getElementById('a1').value;
    var minutes = document.getElementById('a2').value;
    document.getElementById('a3').value = parseInt(resources)*parseInt(minutes);
   }