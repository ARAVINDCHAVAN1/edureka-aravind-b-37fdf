// Operators in java
// Arithmatic operators

var a = 100;
var b = 10;
console.log("The value of a+b is", a + b);
console.log("The value of a-b is", a - b);
console.log("The value of a*b is", a * b);
console.log("The value of a/b is", a / b);

// Assignment operators

var c = b;
c += 2;
console.log(c);

// comparision operators

var x = 39;
var y = 56;
console.log(x == y); //false
console.log(x >= y);  //false
console.log(x <= y); //true

// logical operators

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(true || false);

console.log(!true);
console.log(!false);


// functions in javascrift

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 26);
console.log(c1, c2);

// Conditional javasctift

var age = 38;
age = 38
if (age > 80) {
    console.log('you can drink wine');
}
// else{
//     console.log('you cannot drink wine');
// }

else if (age > 25) {
    console.log('you are a man');
}
else if (age > 35) {
    console.log('you sre s uncle');
}
else {
    console.log('you are legend');
}
console.log('ladder is end');



// loops on java scrift

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function (element) {
//     console.log(element);
// })



// var arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 0;
// while(j<arr.length){


var arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr);
for (var i = 0; i < arr.length; i++) {
   if(i==2){
//         break;
continue
 }
console.log(arr[i]);
}

// string methods in javascift

