// const speedWarning = (speed) => `You are going to ${speed}mph!`;

// console.log(speedWarning(40));

// const distance = [267, 345, 234, 190, 299];

// const distanceTraveled = distance.map(distance => Math.round(distance * 1.6))

// console.log(distanceTraveled)

// const items = [
//     {
//         name:'abc',
//         price: 10
//     },
//     {
//         name:'def',
//         price: 100
//     },
//     {
//         name:'ghi',
//         price: 102
//     },
//     {
//         name:'jkl',
//         price: 103
//     },
// ]

// const calculateTotal = (itemsBought, discount=0) => {

//    const total = itemsBought.reduce((total, currentItem) => total += currentItem.price, 0
// )

//    return total - discount
// }

// console.log(calculateTotal(items,10))


// Rest Parameter

// const setPermission = (level, ...names) => {
//     names.forEach(name => {
//         console.log(`${name} now has ${level} level access`)
//     })
// }

// setPermission('admin','Dave','Sally')

import greetUser from './functions.js'

greetUser()