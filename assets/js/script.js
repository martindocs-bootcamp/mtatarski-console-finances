/**
 * Author: Marcin Tatarski
 * Date: 12-11-2023
 * @license MIT
 * 
 * This program uses financial data to find key numbers like total profit/loss and tracks how money changes month-to-month. 
 * It also identifies the most significant increases and decreases in money over the entire period. 
 */

// import financial data
import finances from "../data/data.js";

// PART.1. Display calculation in the console

// Total number of months
const totalOfMonths = finances.length;

// Net total amount of profit/losses
let netTotal = 0;
for (let i = 0; i < finances.length; i++){
  netTotal += finances[i][1];  
}

// Diffrence between each months
const monthsDifferences = [];
for (let i = 1; i < finances.length; i++){
  monthsDifferences.push(finances[i][1] - finances[i - 1][1]); 
}

// Total change in Profit/Losses
let totalChanges = 0;
for(let i = 0; i < monthsDifferences.length; i++){
  totalChanges += monthsDifferences[i];
}

// Average of the changes in Profit/Losses over the entire period
const averageChanges = (totalChanges /monthsDifferences.length).toFixed(2);

// Objects for storing profit/losses
let greatestIncrease = {
  'month': '',
  'maxIncrease': 0,
}

let greatestDecrease = {
  'month': '',
  'maxDecrease': 0,
}

// Greatest increase/decrease in profit/losses
for (let i = 1; i < finances.length; i++) {
  const trackingChanges = finances[i][1] - finances[i - 1][1];

  if(trackingChanges > greatestIncrease.maxIncrease){
    greatestIncrease.month = finances[i][0]; // month
    greatestIncrease.maxIncrease = trackingChanges; // The greatest increase over entire period
  }
  if(trackingChanges < greatestDecrease.maxDecrease){
    greatestDecrease.month = finances[i][0]; // month 
    greatestDecrease.maxDecrease = trackingChanges; // The greatest decrease over entire period
  }  
}

// Console output 
const output = `
  Financial Analysis 
  ------------------
  Total Months: ${totalOfMonths} 
  Total: £${netTotal}
  Average Change: ${averageChanges}
  Greatest Increase in Profits/Losses: ${greatestIncrease.month} (£${greatestIncrease.maxIncrease})
  Greatest Decrease in Profits/Losses: ${greatestDecrease.month} (£${greatestDecrease.maxDecrease})
`
console.log(output);


// PART.2. Display calculation in the browser
const code = document.querySelector('#code-content');  
code.innerHTML = `
  <table class="table">
    <thead>
      <tr>
        <th colspan="2">Financial Analysis</th>        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Months</td>
        <td>${totalOfMonths}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>£${netTotal}</td>
      </tr>
      <tr>
        <td>Average Change</td>
        <td>${averageChanges}</td>
      </tr>
      <tr>
        <td>Greatest Increase in Profits/Losses</td>
        <td>${greatestIncrease.month} (£${greatestIncrease.maxIncrease})</td>
      </tr>
      <tr>
        <td class="table-left-corner">Greatest Decrease in Profits/Losses</td>
        <td class="table-right-corner">${greatestDecrease.month} (£${greatestDecrease.maxDecrease})</td>
      </tr>
    </tbody>
  </table>   
`  

// Show/hide finacial statement
document.querySelector('.btn').addEventListener('click', (e) => {  
  
  // toggle visibility of the content
  if(code.style.display === "block"){
    // e.target.innerText = 'Show Statement';
    code.style.display = 'none';// hide content    
  }else{
    // e.target.innerText = 'Hide Statement';
    code.style.display = 'block'; // show content
  }
})
