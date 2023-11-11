import finances from "../data/data.js";

// PART.1. Display calculation in the console
const totalOfMonths = finances.length;

let netTotal = 0;
for (let i = 0; i < finances.length; i++) {
  netTotal += finances[i][1];  
}

const monthsDifferences = [];
for (let i = 1; i < finances.length; i++) {
  monthsDifferences.push(finances[i][1] - finances[i - 1][1]);
  
}

console.log(totalOfMonths);
console.log(netTotal);
console.log(monthsDifferences);


// PART.2. Display calculation in the browser