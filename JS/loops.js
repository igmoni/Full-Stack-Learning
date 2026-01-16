// for

// let arr = ["flash", "batman", "superman"];
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

// break and continue
// for (let i = 0; i <= 20; i++) {
//   if (i == 5) {
//     console.log("Detected", i);
//     continue;
//   }
//   console.log(i);
// }

// while

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// do while
// i = 11;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// ["", "", ""]
// [{}, {}, {}]

// for of
const myArr = [1, 2, 3, 4, 5, "js", "arr", "cpp"];
// for (const ele of myArr) {
//   console.log(ele);
// }

// const greetings = "Hello World!";
// for (const ele of greetings) { // this doesn't work for objects
//   console.log(ele);
// }

// maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United Stated of America");
map.set("FR", "France");

// console.log(map);
// map.forEach((ele) => console.log(ele));

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

// for in

// for (const ele in myObject) {
//     console.log(myObject[ele]);
// }

// for(const key in myArr) {
//   console.log(myArr[key])
// }

// forEach
myArr.forEach((a) => console.log(a));

myArr.forEach((item, i, arr) => { // item is the element, i is the index, arr is full array
  console.log("item:", item, "index:", i);
});


