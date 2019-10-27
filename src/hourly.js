const readlineSync = require("readline-sync");

const hourly_wage = readlineSync.question("\nHourly wage: ");
const mon_hours = readlineSync.question("Monday: ");
const tues_hours = readlineSync.question("Tuesday: ");
const wed_hours = readlineSync.question("Wednesday: ");
const thurs_hours = readlineSync.question("Thursday: ");
const fri_hours = readlineSync.question("Friday: ");
const sat_hours = readlineSync.question("Saturday: ");
const sun_hours = readlineSync.question("Sunday: ");

let weekly =  (hourly_wage * mon_hours) +
              (hourly_wage * tues_hours) +
              (hourly_wage * wed_hours) +
              (hourly_wage * thurs_hours) +
              (hourly_wage * fri_hours) +
              (hourly_wage * sat_hours) +
              (hourly_wage * sun_hours);

weekly = weekly.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nYou'll make $" + weekly + " this week.")
