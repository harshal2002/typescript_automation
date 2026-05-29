/* Tuples: tuples are a special type of fixed array where each element can have a different type. 

Unlike regular arrays that allow multiple elements but of same type. 

Tuples let you define the exact type and number of elements in the array. 

*/

let student: [number, string, boolean] = [1, "Harshal", true];

console.log(student);
console.log(student[0]);

//Tuple with optional elements - Declare a tuple with optional elements using the ? symbol

let employee: [string, number, boolean?] = ["Harshal Jadhav", 1];

console.log(employee);

//Tuple with spread operator - this operator allows you to create a tuple that can have a variable number of elements of a specific type.

let numbers: [string, string, ...number[]] = ["QA", "Harshal", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];;

console.log(numbers);

//Merge two tuples using the spread operator

let tup1: [number, string] = [1, "Halo"];
let tup2: [string, boolean] = ["Halo", false];

let mergetup =  [...tup1, ...tup2];

console.log(mergetup);