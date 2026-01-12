// strings
const name = "mohan"
const repoCount = 50

console.log(`Hello my name is ${name} and i have a repo count of ${repoCount}`)

const gameName = new String('mohanhc')


console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));

const newStr = gameName.substring(2, 5)
console.log(newStr);

const newStr2 = gameName.slice(0,-4)
console.log(newStr2);

const newStr3 = "        mohanhc     "
console.log(newStr3.trim())

const url = "https://monxdev.vercel.app/blogs/"

console.log(url.replace("/blogs","/blog"))
console.log(url.includes("monxdev"));
console.log(url.split('/'));


