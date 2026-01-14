const userLoggedIn = "moth"

// if(userLoggedIn) {
//     console.log("True");
    
// } else {

//     console.log("True");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

const arr = []

// if(arr.length === 0) {
//     console.log("Array is empty");
// }

// const obj = {}
// if(Object.keys(obj).length === 0) {
//     console.log("Object is empty")
// }

false == 0 // true
'' == 0 // true
false == '' // true

// Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5 ?? null // used when null or undefined comes with value
// it's a safety check for the null or undefined

val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // first value gets assigned // 10 here 

console.log(val1)

// Terniary operator

const res = val1 ? "True" : "false"
console.log(res)