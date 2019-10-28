const length = 48;
const width = 24;
const diameter = 6;
const area = 48 * 24;
const circle = Math.PI * ((6/2) ** 2);

let surface = area - circle;

surface = surface.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is " + surface + " square inch(es).");
