const readlineSync = require("readline-sync");

const first_homework = readlineSync.question("\nEnter three homework grades.\n");
const second_homework = readlineSync.question("");
const third_homework =readlineSync.question("");

const first_quiz = readlineSync.question("\nEnter three quiz grades.\n");
const second_quiz = readlineSync.question("");
const third_quiz = readlineSync.question("");

const first_test = readlineSync.question("\nEnter three test grades.\n");
const second_test = readlineSync.question("");
const third_test = readlineSync.question("");

let homework_weight = (0.15*first_homework + 0.15*second_homework + 0.15*third_homework)/3;
let quiz_weight = (0.35*first_quiz + 0.35*second_quiz + 0.35*third_quiz)/3;
let test_weight = (0.5*first_test + 0.5*second_test + 0.5*third_test)/3;

let mp_grade = homework_weight + quiz_weight + test_weight;

mp_grade = mp_grade.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nYour marking period grade is " + parseFloat(mp_grade).toFixed(2).toLocaleString() + "%.");
