/* Arrays: It is the collection of same datatypes.
It is a data structure that can hold a fixed number of values of the same type.
Each variable in an array is called an element, and each element is identified by a
particular integer which is also called an Index. The total number of elements in an
array decides the length of the array. The first index of an array is always 0 and the last
index is always (length of the array - 1). */

const arr1 : number[] = [1, 2, 3, 4, 5];
console.log(arr1.length); //5
console.log(arr1[3]);


const names : string[] = ["Harshal", "Anita", "Sanjay", "Jadhav"];

console.log(names);
console.log(names.length);

const places : string[] = new Array(4);

places[0] = "Nagpur";
places[1] = "Thane";
places[2] = "Mumbai";
places[3] = "Bengaluru";

console.log(places);

