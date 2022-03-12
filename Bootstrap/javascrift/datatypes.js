// Data Types.

// C - int, float, double, short, char
// Java - String, long, Date, decimal

// int x = 10;
// var x = 10;
// x = "name";

// Data Types in JS
// 1. number
// 2. string
// 3. object
// 4. function
// 5. undefined

let x; // Value is not defined.
console.log(typeof x); // undefined

x = 10;
// operator to find datatype of an identifier
console.log(typeof x); // number

x = "name";
console.log(typeof x); // string

x = {id: 1, name: 'Doe', dept: 'Finance'};
console.log(typeof x); // object

x = function print(){
    console.log("This is a function");
}
console.log(typeof x);
x();

x = new Date(); // creating instance of Date Type.
console.log(x);
console.log(typeof x);

// operator to fins out instance of object.
console.log(x instanceof Date); // true

x = null; // defined with no data.
console.log(typeof x); // object