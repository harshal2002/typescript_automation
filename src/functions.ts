//Functions: function is a reusable block of code designed to perform a specific task

function subtraction(a: number, b: number): number {
    return a - b;
}

let newsub = subtraction(200, 50);

console.log(newsub); //150;

//Optional Parameters: Uses ? to make a parameter optional;

function greet(name: string, greeting?: string): string {
    return greeting? `Hey, ${name}! You are ${greeting}!` : `Hey, ${name}!`;
}

let message1 = greet("Harshal");
let message2 = greet("Sanjay", "awesome");
let message3 = greet("Anita", "great");

console.log(message1);
console.log(message2);
console.log(message3);


/*arrow functions: A concise way to write functions using the => syntax instead of 
writing a separate function declaration*/
const addition = (a: number, b: number): number => a+b;
let newadd = addition(90, 10);

console.log(newadd); //100


/* function overloading: The ability to define multiple functions with 
the same name but different parameters */

function display(a: number, b: number): number;
function display(a: string, b: string): string;
function display(a: number, b: string): string;
function display(a: any, b: any): any {
    return a + " " + b;
}

console.log(display(10, 40)); //50; 
console.log(display("Hey", "LinkedIn connections")); //Hey LinkedIn connections
console.log(display(3, "years of linkedin experience")); //3 years of linkedin experience
