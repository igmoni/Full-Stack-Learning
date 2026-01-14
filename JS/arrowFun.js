const user = {
  username: "mohan",
  price: 999,
  welcomeMsg: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMsg()
// user.username = "SAM"
// user.welcomeMsg()

// console.log(this);

// function chai() {
//     let username = "mohan"
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
// }

// chai()

const chai = () => {
  let username = "mohan";
  console.log(username);
};

chai();

// () => {}

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => ( num1 + num2 )

const add = (num1, num2) => ({username: "mohan"})

console.log(add(3,4))

