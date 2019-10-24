const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const inches_to_millimeter = 25.4;
let area = (width * length) * inches_to_millimeter ** 2;
area = area.toLocaleString({maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
