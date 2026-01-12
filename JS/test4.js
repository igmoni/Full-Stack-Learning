// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// strict check
console.log("2" === 2);
console.log("2" !== 2);



// Primitive 
// 7 types: String, Number, Boolean, null, undefined, sumbol, BigInt

const score = 10000
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3n
console.log(typeof score);


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ['iron man','spider man','spider woman']
let myObj = {
    name: "mohan",
    age: 20
}

const myFunction = () => {
    console.log("Hello World");
}

console.log(typeof myFunction);


// Stack (Primitive) , Heap(Non Primitive)

