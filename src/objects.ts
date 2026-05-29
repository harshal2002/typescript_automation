/* 
object: an object in typescript is a collection of key-value pairs where each key is a string
and each value can be of any datatype
*/

let emp : {
    name: string,
    age: number,
    hometown: string,
    isTechnical: boolean
} = {
    name: "Harshal",
    age: 23,
    hometown: "Maharashtra",
    isTechnical: true
};

console.log(emp.age);
console.log(emp.hometown);

let student_details = {
    name: "Rohan",
    id: 2251,
    age: 23
}

console.log(student_details.name);


//object with methods

let animal = {
    name: "dog",
    breed: "labrador", 
    action: function() {
        return "Woof! Woof!";
    }
};

console.log(animal.action()); //Called the method of the object

//Merge objects : Merging two objects using the spread operator

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};

let mergedObj = {...obj1, ...obj2, ...obj3};

console.log(mergedObj);
console.log(mergedObj.d);