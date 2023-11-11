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