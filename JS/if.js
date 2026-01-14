// if
const isUserLoggedIn = true;
// const temperature = 41;
// if (2 !== 2) {
//   console.log("Executed");
// } else {
//   console.log("Not Executed");
// }

// if (temperature === 41) {
//   console.log("temperatue is lesser than 50");
// } else {
//   console.log("temperatue is greater than 50");
// }
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`user Power: ${power}`);
// }

// console.log(`user Power: ${power}`);

const balance = 1000;
// if (balance > 500) console.log("test");

const result =
  balance < 500
    ? console.log("less than")
    : balance < 750
    ? console.log("less than 750")
    : balance < 900
    ? console.log("less than 900")
    : console.log("1200");

console.log(result);

const debitCard = true;
const isUserLoggedInFromGoogle = false;
const isUserLoggedInFromEmail = true;
const guestUser = true;

if (isUserLoggedIn && debitCard) {
  console.log("allow to buy course");
}

if (isUserLoggedInFromEmail || isUserLoggedInFromGoogle || guestUser) {
  console.log("user logged in");
}
