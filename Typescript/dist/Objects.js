"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
};
// The above varaible types is below
// {
//     name: string
//     price: number
//     isHot: boolean
// }
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: false,
};
const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steal" };
smallCup = bigCup;
const cffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = cffee;
const u = {
    username: "chaiaurcode",
    password: "123",
};
// partial type
// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };
// we can update the values of the function partially too
// it's like optinal passing data
const updatedChai = (updates) => {
    console.log("updating cha with", updates);
};
// when using required we should pass both the params no matter if they're optional in the types
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({ name: "masala chai", quantity: 2 });
const chaiInfo = {
    name: "lemon tea",
    price: 30
};
//# sourceMappingURL=Objects.js.map