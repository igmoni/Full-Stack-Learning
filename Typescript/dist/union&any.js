"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union
let subs = "1m";
//  in project's we use it like this // can make own data types like this
let apiRequestStatus = "pending";
apiRequestStatus = "success";
let airlineSeat = "aisle";
airlineSeat = "aisle";
const orders = ["12", "24", "34", "42"];
// some times we need to add undefined to solve the error if the value isn't assigned to it
let currOrder;
for (let order of orders) {
    if (order === "28") {
        currOrder = order;
        break;
    }
    currOrder = "11";
}
console.log(currOrder);
//# sourceMappingURL=union&any.js.map