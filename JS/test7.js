let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


// let createdDate1 = new Date(2005, 11, 21)
// let createdDate2 = new Date(2005, 11, 21, 5 ,3)
// let createdDate3 = new Date("2023-01-14")
let createdDate4 = new Date("01-14-2023")
// console.log(createdDate4.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(createdDate4.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

// can customise the date & there are multiple values
console.log(newDate.toLocaleString('default', {
    weekday: "narrow"
}))