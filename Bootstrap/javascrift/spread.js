// Rest and Spread Operator. (...)
// Introduced in ES6.

// Used in collections to help with multiple values.

// Using spread operator
// Converts array into individual values.

const indianCars = ["Tata", "Mahindra", "Maruti"];
const usCrs = ["Tesla", "Ferrari", "Ford"];

// create another array with values from both these array.
console.log(indianCars);
console.log(usCrs);
// indianCars.concat(usCrs);
// const result = [indianCars+usCrs]; // ['Tata,Mahindra,MarutiTesla,Ferrari,Ford']
const result = [...indianCars, ...usCrs]; // [ 'Tata', 'Mahindra', 'Maruti', 'Tesla', 'Ferrari', 'Ford' ]
const result2 = [...result, "KIA"];
console.log(result2);