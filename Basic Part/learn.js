// const player = "per";
// const opponent = "Nick";
// const game = "AmazingFighter";
// let points = 0;
// let hasWon = false;

// points += 100;
// hasWon = true;

// if (hasWon) {
//   console.log(`
//     ${player} get ${points} points and won the ${game} game!"
//   `);
// } else {
//   console.log(`The winner is ${opponent}! ${player} lost the game`);
// }

// let myCourses = ['Learn',"Earn",'More']

// function logItems(arr) {
//   for(let i=0;i<arr.length;i++) {
//     console.log(arr[i])
//   }
// }

// logItems(myCourses)

let data = [
  {
    player: "John",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(data[0].score);
});
