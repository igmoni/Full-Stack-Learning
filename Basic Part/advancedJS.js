const exercise = 90;

let message = "";
if (exercise < 30) {
  message = "You need to try harder";
} else {
  message = "Doing good";
}

const message = exercise < 30 ? "You need to try harder" : "Doing good"

const message =
  exercise < 30
    ? "You need to try harder"
    : exercise < 60
    ? "Doing good"
    : "Excellent";

console.log(message);

const player = 3;
const correct = 6;

const msg = player < correct ? "Low" : player > correct ? "High" : "Correct";

console.log(msg);

// switch statement

function selectItem(item) {
  let price = 0;

  switch (item) {
    case "coffee":
      price = 2;
      break;
    case "sandwiches":
      price = 5;
      break;
    case "salad":
      price = 4;
      break;
    case "lemon cake":
      price = 3;
      break;
    default:
      return `Sorry, we don't sell ${item}`;
  }
  return `You selected ${item}. That will be $${price}`;
}

console.log(selectItem("salad"));

// Object destructuring

const fav = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom cruise",
  director: "TOny Scott",
};

const { title, year, genre, star, director } = fav;

console.log(
  `My fav film is ${title} starring ${star}. It;s an ${genre} directed by ${director} and released in ${year}`
);

// challenge

const dream = {
  destination: 'New York',
  activity: 'Bungee Jumping',
  accommodation: 'HOTEL',
  companion: 'Meghu'
}

const {destination, activity, accommodation, companion} = dream

console.log(`I would love to go to ${destination}, to do ${activity}. I'd sleep in a ${accommodation} and hang out with ${companion}`)

// setTimeOut
// Meaning:- It is used to keep a time out, so it can run it after some time
function display(light) {
  console.log(light)
}

setTimeout(display,3000,'0')

display('D')

// challenge

function logAnswer(name, points) {
  console.log(
    `The answer is ${name} of course! If you got that right, give yourself ${points} points`
  );
}

console.log("What is the capital of Peru?");

setTimeout(logAnswer, 3000, 'Lima', 10);

