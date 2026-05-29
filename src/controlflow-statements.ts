// if-else and switch statements

/* if else-if else syntax

if (true) {
}
else if (false) {
}
else {
    }
*/

const randnum = Math.floor(Math.random() * 10);
console.log(randnum);

if (randnum == 0){
    console.log("The random number is zero" + " " + randnum);
}
else if (randnum ==1){
    console.log("The random number is one" + " " +randnum);
}
else if (randnum ==2){
    console.log("The random number is two" + " " + randnum);
}   
else if (3 <= randnum && randnum <= 5){
    console.log("The random number is between three and five" + " " + randnum);
}
else if (6 <= randnum && randnum <= 10){
    console.log("The random number is between six and ten"+ " " + randnum);
}


//Switch statement syntax   

//switch (expression) {
//    case value1:
//        // code to be executed if expression === value1
//        break;
//    case value2:
//        // code to be executed if expression === value2
//        break;
//    default:
//        // code to be executed if expression doesn't match any case
//}

const randnum1 = Math.floor(Math.random() * 5);
console.log(randnum);

switch (randnum1) {
    case 0: 
        console.log("The printed random number is zero" + " " + randnum1);
        break;
    case 1: 
        console.log("The printed random number is one" + " " + randnum1);
        break;
    case 2: 
        console.log("The printed random number is two" + " " + randnum1);
        break;
    case 3: 
        console.log("The printed random number is three" + " " + randnum1);
        break;
    case 4: 
        console.log("The printed random number is four" + " " + randnum1);
        break;
    default:
        console.log("The printed random number is not between zero and four" + " " + randnum1);
        break;
}   