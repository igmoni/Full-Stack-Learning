# Projects reated to DOM

##  Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### Project -1 Code Solution for color changer
```javascript
const body = document.querySelector("body")
const btns = document.querySelectorAll(".button")

btns.forEach((btn) => {
  // console.log(btn)
  btn.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.target)

    switch(e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id
      case "white":
        body.style.backgroundColor = e.target.id
      case "blue":
        body.style.backgroundColor = e.target.id
      case "yellow":
        body.style.backgroundColor = e.target.id  
    }
  })
})
```

### Project - 2 Code Solution for BMI Calculator
```javascript
const form = document.querySelector("form")
// this use case will give yuo empty
//const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit",(e) => {
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const result = document.querySelector("#results")
  const weight = parseInt(document.querySelector("#weight").value) // take input when the form is submitted 
  
  if(height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`
  }  else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    // show the result
    if(bmi <= 18.6) {
      result.innerHTML = `<span>UnderWeight ${bmi}</span>`
    } else if(bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>Normal Weight ${bmi}</span>`
    } else {
      result.innerHTML = `<span>Over Weight ${bmi}</span>`

    }
  }
})
```

### Project - 3 Code Solution for Digital Clock
```javascript
const clock = document.querySelector("#clock")
// Digital Clock
setInterval(() => {
  const date = new Date().toLocaleTimeString()
  clock.innerHTML = date
}, 1000)


```


  ### Project - 4 Code Solution for Guess the number

  ```javascript
  let randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const lastResult = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  // validate the number is given or not
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number more than 1');
  } else if (guess > 100) {
    alert('Please enter a valid number less than 100');
  } else {
    prevGuess.push(guess);
    if (numOfGuess === 11) {
      displayGuess(guess);
      displayMsg('Game Over, Rnadom num was:', randNum);
      endGame()
    } else {
      displayGuess(guess);
      checkGuess(guess)
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randNum) {
    displayMsg("You guessed it right")
    endGame()
  } else if (guess < randNum) {
    displayMsg("Number is too low")
    
  } else {
    displayMsg("Number is too high")
  }
};

const displayGuess = (guess) => {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numOfGuess++
  lastResult.innerHTML = `${10 - numOfGuess}`
};

const displayMsg = (msg) => {
  lowOrHi.innerHTML = `<h3>${msg}</h3>`
};


const newGame = () => {
  const btn = document.querySelector("#newGame")
  btn.addEventListener("click",(e) => {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numOfGuess = 1
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${10 - numOfGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)


playGame = true
  })
};

const endGame = () => {
  userInput.value = ''
  userInput.setAttribute("disabled","")
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
};

  ```