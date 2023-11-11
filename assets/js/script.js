import finances from "../data/data.js";

// PART.1. Display calculation in the console
const totalOfMonths = finances.length;

let netTotal = 0;
for (let i = 0; i < finances.length; i++) {
  netTotal += finances[i][1];  
}

console.log(totalOfMonths);
console.log(netTotal);


// PART.2. Display calculation in the browser