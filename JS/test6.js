// numbers

const score = 400
const score1 = new Number(500)
console.log(score1);

console.log(score1.toString().length)
console.log(score1.toFixed(3))

const otherNumebr = 23.523556
console.log(otherNumebr.toPrecision(10))

const hundred = 1000000
console.log(hundred.toLocaleString('en-us'))

// +++++++++++++++++ MATHS ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.2));
console.log(Math.min(1,2,3,56,82,82,41,2));
console.log(Math.max(1,2,3,56,82,82,41,2));

console.log(Math.random()); // gives value between 0 and 1
console.log(Math.floor(Math.random() * 100) + 1);

// if we want a start value and a end value then we use it like the below example
const min = 10
const max = 200
console.log(Math.floor(Math.random() * (max - min + 1) + min)) 

