const readlineSync = require("readline-sync");

const annual = readlineSync.question("\nAnnual salary: ");

const month = annual / 24

const pre_tax = (month * 0.93);

const fit = (pre_tax * 0.157);
const sit = (pre_tax * 0.0447);
const sst = (pre_tax * 0.062);
const mt = (pre_tax * 0.0145);

let salary = pre_tax - (fit + sit + sst + mt);

salary = salary.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nYour take-home pay each check will be $" + salary + ".");
