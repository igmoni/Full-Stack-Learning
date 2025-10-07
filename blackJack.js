// Black Jack game
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("mes-el");
let sumEl = document.getElementById("sum");
let cardEl = document.querySelector("#cards");
let cards = [];
let sum = 0;

function startGame() {
  isAlive = true;
  hasBlackJack = false;

  // ✅ Fixed: Assign cards as an array
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];

  // ✅ Correct sum calculation
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  // ✅ Clear previous text before re-rendering
  cardEl.textContent = "Cards: ";

  // ✅ Display all cards in the array
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  // ✅ Show the current sum
  sumEl.textContent = "Sum: " + sum;

  // ✅ Check the game state
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Hooray! BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  // ✅ Prevent drawing if game is over or blackjack achieved
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;

    // ✅ Re-render with the new card — no restart
    renderGame();
  }
}

function getRandomCard() {
  // ✅ Generate a random card (1-13)
  let num = Math.floor(Math.random() * 13) + 1;
  if (num > 10) {
    return 10; // J, Q, K = 10
  } else if (num === 1) {
    return 11; // Ace = 11
  } else {
    return num;
  }
}

let player = {
  name: 'Mohan',
  chips: 145,
}

let playerEl = document.querySelector('#mon')
playerEl.textContent = player.name + ': $' + player.chips