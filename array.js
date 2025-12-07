// Student Marks Analyzer	Array, loop, conditional	Enter marks in an array → calculate total, highest score.

let marks = [56, 75,76,80,90,55];
let sum = 0;
for (const mark of marks) {
    sum = sum + mark;
}
let highScore = sum / marks.length;
console.log("highest Score is =",highScore);


let company = ["HDFC", "ICICI", "SBI", "POST", "TCS"];

console.log(company.shift());
console.log(company.unshift("HDFC"));
console.log(company.splice(2,1,"WIPRO"));

let number = [1, 2, 3, 4, 5, 6];
console.log(number.pop());
console.log(number.push(6));