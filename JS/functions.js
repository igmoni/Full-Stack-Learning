function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function add(num1, num2) {
//     console.log(num1 + num2)
// }

function add(num1, num2) {
  return num1 + num2;
}

const result = add(3, 4);
// console.log(result);

function loginUser(userName = "User") {
  if (userName) {
    console.log("please enter a username");
  }
  return `${userName} just Logged in.`;
}

const msg = loginUser("Mohan");
// console.log(msg);

function calculateCartPrice(val1, val2, ...nums) {
  return nums;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600, 1205 ,2200));

const user = {
  username: "mohan",
  price: 109,
};

function handleObject(anyObject) {
  console.log(
    `UserName is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "mohan",
  price: 109,
});

const newArray = [200, 300, 400, 500, 600];
function returnArray(getArr) {
  return getArr[1];
}

console.log(returnArray(newArray));
console.log(returnArray([1, 2, 3, 4, 5]));
