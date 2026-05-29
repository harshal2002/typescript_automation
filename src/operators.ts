// Operators: Operators are symbols used to perform operations on data

// 1. Arithmetic Operators: +, -, *, /, %

let a: number = 10;
let b: number = 5;
let c: number = 20;

console.log(a + b) //15
console.log(a - b) //5
console.log(a * b) //50
console.log(c / b) //4
console.log(c % a) //0

//2. Assignment Operators: =, +=, -=, *=, /=

let y = 100;

y += 200; //y = y + 200

console.log(y); //300


 //Logical Operators: && (AND), || (OR), and ! (NOT).

let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log(isLoggedIn && isAdmin); //false
console.log(isLoggedIn || isAdmin); //true

console.log(isLoggedIn);
console.log(isAdmin);

//Unary Operators: Operators are a single operand

let ab = 10;
console.log(-ab);

let ac: boolean = true;
console.log(!ac); //false
