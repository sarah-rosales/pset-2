const readlineSync = require("readline-sync");

const students = readlineSync.question("\nStudents: ");
const teachers = readlineSync.question("Teachers: ");
const bus_capacity = readlineSync.question("Bus capacity: ");

const people = parseFloat(students) + parseFloat(teachers);


let bus = Math.round(parseFloat(people) / parseFloat(bus_capacity));
const remainder = parseFloat(people) % parseFloat(bus_capacity);

bus = bus.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});


console.log(" \n" + parseFloat(bus) + " bus(es) is (are) needed, with " + remainder + " passenger(s) on the last bus.");
