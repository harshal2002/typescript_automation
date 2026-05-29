/* 2-D arrays: A 2-D array is an array of arrays. It is a collection of data in a tabular form, 
where each element is accessed using two indices: one for the row and one for the column. 
The first index represents the row number, and the second index represents the column number. 
The total number of rows and columns in a 2-D array determines its size.

*/

const twoDArray: number[][] = [
    [10], [20], [30], [40], [50],
    [61], [71], [81], [91], [101]
];

console.log(twoDArray[1][1]);
console.log(twoDArray.length);

for (let i1=0; i1< twoDArray.length; i1++) {
    for (let j1=0; j1 < twoDArray[i1].length; j1++) {
        console.log(twoDArray[i1][j1] + " ");
    }
}