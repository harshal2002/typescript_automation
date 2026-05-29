/*

Classes and OOPS

Classes: These are a blueprint for creating objects in all programming languages. 
In TypeScript, we can define a class using the 'class' keyword. A class can have properties 
and methods. 
*/

class man {
    name: string; // instance variables
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    
    }

    welcome(): void {
        console.log("Welcome to world of TypeScript," + this.name);
    }

    product(a: number, b: number){
        return a * b;
    }
}

const o1 = new man("Harshal", 23);

o1.welcome();

let result = o1.product(10, 2);
console.log(result);
