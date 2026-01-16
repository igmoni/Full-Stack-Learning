const coding = ["js", "ruby", "java", "python", "cpp"];
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for Each
// const values = coding.forEach(item => console.log(item))
// console.log(values) // this doesn't work so we do it using map()

const newNums = [];
myNums.forEach((num) => {
  if (num % 2 == 0) {
    newNums.push(num);
  }
});
console.log(newNums);

// map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNumbers.map((num) => num + 10)
console.log(nums)





// filter
const newNum = myNums.filter((e) => e % 2 !== 0); // it returns a array where the condition is true
console.log(newNum);

// reduce
