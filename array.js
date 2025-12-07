// ------------------------------
// Student Marks Analyzer
// ------------------------------

let marks = [56, 75, 76, 80, 90, 55];
let sum = 0;

for (const mark of marks) {
    sum += mark;
}

let averageScore = sum / marks.length;
console.log("Average Score =", averageScore);


// ------------------------------
// Array Methods: shift, unshift, splice
// ------------------------------

let company = ["HDFC", "ICICI", "SBI", "POST", "TCS"];

console.log("Shift (removed):", company.shift());
console.log("Unshift (added):", company.unshift("HDFC"));
console.log("Splice result:", company.splice(2, 1, "WIPRO"));
console.log("Updated Company Array:", company);


// ------------------------------
// Array Methods: pop, push
// ------------------------------

let number = [1, 2, 3, 4, 5, 6];

console.log("Pop (removed):", number.pop());
console.log("Push (new length):", number.push(6));
console.log("Updated Number Array:", number);
