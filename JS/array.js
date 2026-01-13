// array

const myArr = [1, 2, 3, 4, 5, 6, 7];
const myHeros = ["Iron Man", "Spider Man", "Thor"];
const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr.reduce((acc, curr) => acc * curr, 1));

// console.log(myArr)
// array methods

myArr.push(8)
myArr.push(9) // adds value at last
myArr.pop() // removes value from last

myArr.unshift(10) // adds value at first
myArr.shift() // removes first value from array

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(5))

const newArr = myArr.join()
// console.log(newArr)

// slice, splice

// console.log("A:", myArr);

const nym1 = myArr.slice(1, 3);
// console.log(nym1);
// console.log("B:", myArr);

const nym2 = myArr.splice(1, 3); // removes the values from the original array
// console.log(nym2);
// console.log("C:", myArr);

// array 2
const marvel = ["spiderman", "ironman", "thor", "panther"];
const dc = ["batman", "superman", "joker"];

const allHeros = [...marvel, ...dc];
// console.log(allHeros);

const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = arr1.flat(2)
// console.log(real_array)

console.log(Array.isArray("mohan"))
console.log(Array.from("mohan")) // divides the values and puts it into array
console.log(Array.from({name: "mohan"})) // it returns empty casue it doesn't know if it shld make keys array or value array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))