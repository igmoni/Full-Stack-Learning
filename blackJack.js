// Black Jack game

let firstCard = 1,
  secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("mes-el");
let sumEl = document.getElementById("sum");
let cardEl = document.querySelector("#cards");

function startGame() {
  renderGame();
}

function renderGame() {
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += 'Cards' + cards[i];
    
  }
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "hooray! Black Jack";
    hasBlackJack = true;
  } else {
    message = "Out of Game";
    isAlive = false;
  }
  messageEl.innerHTML = message;
}
console.log(isAlive);

// Cash Out
console.log(hasBlackJack);

function newCard() {
  let card = 8;
  sum += card;
  cards.push(card)
  startGame();
}
