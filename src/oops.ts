/*

Classes and OOPS

Classes: These are a blueprint for creating objects in all programming languages. 
In TypeScript, we can define a class using the 'class' keyword. A class can have properties 
and methods. 
*/

export class man {
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

export const m1 : number = 100;

export function percentage(marks: number, totalMarks: number): number {
    return (marks / totalMarks) * 100;
}

const o1 = new man("Harshal", 23);

o1.welcome();

let result = o1.product(10, 4);
console.log(result);
