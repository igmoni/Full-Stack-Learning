"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeChai = (type, cups) => {
    console.log(`making ${cups} cups of ${type}`);
};
makeChai("masala", 2);
function getChaiPrice() {
    return 25;
}
function makeOrde(order) {
    if (!order)
        return null;
    return order;
}
function logChai() {
    console.log("Chai is ready");
}
// optianl parameter
function orderChai(type) { }
// default parameter
function orderChai1(type = "Masala") { }
// usually the optional & default parameter shld added at last it's the best practice
function createChai(order) {
    return 4;
}
//# sourceMappingURL=Functions.js.map