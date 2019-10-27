const readlineSync = require("readline-sync");

const annual = readlineSync.question("\nAnnual salary: ");

let month = annual / 24

let pre_tax = (month * 0.93);

let fit = (pre_tax * 0.157);
let sit = (pre_tax * 0.0447);
let sst = (pre_tax * 0.062);
let mt = (pre_tax * 0.0145);

let salary = pre_tax - (fit + sit + sst + mt);

salary = salary.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nYour take-home pay each check will be $" + salary + ".");
