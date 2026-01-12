// Data Type Conversion

let score = "33"

console.log(typeof score); // 1st way to check typeof
console.log(typeof(score)); // 2nd way to check typeof

let valueInNumber = Number(score)
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN Not a Number
// true => 1; false => 0
// "" => false
// "hitesh" => true

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNum = 33

let strNum = String(someNum)
console.log((strNum));
console.log(typeof strNum);


// ******************* Operations ************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2 = " hello1"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 1);
console.log(1 + 3 + "2");
console.log("1" + 2 + 2);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // shouldn't code like this

let gameCounter = 100
++gameCounter
console.log(gameCounter);

