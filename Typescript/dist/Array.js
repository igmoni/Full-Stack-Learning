"use strict";
// Array
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Ginger"];
const chaiPrice = [10, 20];
const rating = [4.5, 2.5];
const menu = [
    { name: "masala", price: 15 },
    { name: "Ginger", price: 25 },
];
const cities = ["Bengaluru", "Delhi"];
// cities.push("Pune")
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
// cant change the position of the types in the chaituple like num, string
let chaiTuple = ["masala", 20];
// if optional then we can enter it or not enter it
let userInfo;
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];
const location = [2258, 325];
const chaiItems = ["Masala", 25];
// enums
var cupSize;
(function (cupSize) {
    cupSize[cupSize["small"] = 0] = "small";
    cupSize[cupSize["medium"] = 1] = "medium";
    cupSize[cupSize["large"] = 2] = "large";
})(cupSize || (cupSize = {}));
const size = cupSize.large;
// incremental enums
var startus;
(function (startus) {
    startus[startus["pending"] = 100] = "pending";
    startus[startus["served"] = 101] = "served";
    startus[startus["cancelled"] = 102] = "cancelled"; // 102
})(startus || (startus = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["masala"] = "masala";
    ChaiType["ginger"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`making: ${type}`);
}
// makeChai(ChaiType.ginger)
// keeping same type of data is good practice 
var randomEnum;
(function (randomEnum) {
    randomEnum[randomEnum["id"] = 1] = "id";
    randomEnum["name"] = "chai";
})(randomEnum || (randomEnum = {}));
var Sugar;
(function (Sugar) {
    Sugar[Sugar["low"] = 1] = "low";
    Sugar[Sugar["medium"] = 2] = "medium";
    Sugar[Sugar["high"] = 3] = "high";
})(Sugar || (Sugar = {}));
const s = Sugar.high;
// tuple is array at last
let t = ['chai', 10];
t.push("extra");
//# sourceMappingURL=Array.js.map