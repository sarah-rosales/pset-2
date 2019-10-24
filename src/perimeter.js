const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const in_to_cm = 2.54;
let perimeter = (2 * width + 2 * length) * in_to_cm;

perimeter = perimeter.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).");
