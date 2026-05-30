/*
Modules: Modules are individual files that contain code. Anything written in a module
belongs and scoped to that module only unless something is explicityly exported from the module
and imported into another module. Modules are a way to organize code and manage dependencies. 

*/
import { man, m1, percentage } from "./oops";

const o1 = new man("Harshal S Jadhav", 23);

o1.welcome();

let result = o1.product(10, 3);
console.log(result);

console.log(m1);

let percent = percentage(864, 1000);
console.log(percent);