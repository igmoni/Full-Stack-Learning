let msgs = ["Hey", "How about you?", "All good"];

msgs.push("Same here");

console.log(msgs);

msgs.pop();

console.log(msgs);

for (let i = 0; i< msgs.length; i++) {
    console.log(msgs[i])
}

let cards = [7,3,9]

for(let i = 0; i< cards.length; i++ ) {
    console.log(cards[i])
}


let player1Time = 102
let player2Time = 107

function getFastest() {
    if(player1Time < player2Time) {
        return player1Time
    } else if(player2Time< player1Time){
        return player2Time
    } else {
        return player1Time
    }
}

let randomNumber = Math.random() * 6
console.log(Math.floor(randomNumber) + 1)


let countries = ['T',"I",'U',"I",'M']
countries.pop()
countries.push('Pakistan')
console.log(countries)
countries.unshift('China')
countries.shift()

console.log(countries)

// Rocks, Papers, Scissors
let hands = ['rocks','paper','scissor']

function randomHand() {
    let randomIndex = Math.floor(Math.random() * 3)

    return hands[randomIndex]
}

console.log(randomHand())
