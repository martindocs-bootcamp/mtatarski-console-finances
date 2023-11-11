import finances from "../data/data.js";

// PART.1. Display calculation in the console
const totalOfMonths = finances.length;

let netTotal = 0;
for (let i = 0; i < finances.length; i++){
  netTotal += finances[i][1];  
}

const monthsDifferences = [];
for (let i = 1; i < finances.length; i++){
  monthsDifferences.push(finances[i][1] - finances[i - 1][1]);  
}

let totalChanges = 0;
for(let i = 0; i < monthsDifferences.length; i++){
  totalChanges += monthsDifferences[i];
}

const averageChanges = (totalChanges /monthsDifferences.length).toFixed(2);

let greatestIncrease = {
  'month': '',
  'maxIncrease': 0,
}

let greatestDecrease = {
  'month': '',
  'maxDecrease': 0,
}

for (let i = 1; i < finances.length; i++) {
  const trackingChanges = finances[i][1] - finances[i - 1][1];

  if(trackingChanges > greatestIncrease.maxIncrease){
    greatestIncrease.month = finances[i][0];
    greatestIncrease.maxIncrease = trackingChanges;
  }
  if(trackingChanges < greatestDecrease.maxDecrease){
    greatestDecrease.month = finances[i][0];
    greatestDecrease.maxDecrease = trackingChanges;
  }  
}



console.log(totalOfMonths);
console.log(netTotal);
// console.log(monthsDifferences);
// console.log(totalChanges);
console.log(averageChanges);
console.log(greatestIncrease, greatestDecrease);


// PART.2. Display calculation in the browser