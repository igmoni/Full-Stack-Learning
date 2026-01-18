// Array

const chaiFlavours: string[] = ["Masala", "Ginger"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 2.5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "masala", price: 15 },
  { name: "Ginger", price: 25 },
];

const cities: readonly string[] = ["Bengaluru", "Delhi"];
// cities.push("Pune")

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// cant change the position of the types in the chaituple like num, string
let chaiTuple: [string, number] = ["masala", 20]

// if optional then we can enter it or not enter it
let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ["hitesh", 100, true]


const location: readonly [number, number] = [2258, 325]
const chaiItems: [name: string, price: number] = ["Masala", 25]

// enums

enum cupSize {
    small, medium, large
}

const size = cupSize.large

// incremental enums
enum startus {
    pending = 100,
    served, // 101
    cancelled // 102
}

enum ChaiType {
    masala = 'masala',
    ginger = 'ginger',
}

function makeChai(type: ChaiType) {
    console.log(`making: ${type}`)
}

// makeChai(ChaiType.ginger)


// keeping same type of data is good practice 
enum randomEnum {
    id = 1,
    name = "chai"
}

const enum Sugar {
    low = 1,
    medium = 2,
    high = 3
}

const s = Sugar.high

// tuple is array at last
let t: [string, number] = ['chai',10]
t.push("extra")