// Date Type in JavaScript.

// 1. How to get current date and time ?
const currentDate = new Date();
console.log(currentDate);

// 2. Date formats in JavaScaript.
console.log(currentDate.toDateString()); // date Sun Mar 13 2022
console.log(currentDate.toTimeString()); // time 18:44:38 GMT+0530 (India Standard Time)

// 3. How to get year from date.
console.log(currentDate.getFullYear());

// 4. How to get month from date.
console.log(currentDate.getMonth()); // 2 [0, ...., 11]

// 5. How to get hour from a date.
console.log(currentDate.getHours());

// 6. How to get day from date?
console.log(currentDate.getDay()); // 0 [0, .., 6]

// Which is the most useful library to work with dates.
// moment js