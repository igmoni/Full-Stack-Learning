"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type assertion
// forcing a variable that type is specific data type
let res = "42";
let numericLen = res.length;
let bookString = `{"name":"who moved my cheese" }`;
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
// any vs unkown
let value;
value = "string";
value = [1, 23, 4, 5];
value = value.topperCase(); // any allows to apply any kind of method but throws error in the output
let newVal;
newVal = "Chai";
newVal = [1, 2, 3, 4];
newVal = 2.5;
// newVal.toUpperCase() // in unkown it throws error
if (typeof newVal === "string") {
    newVal.toUpperCase();
}
try {
}
catch (err) {
    if (err instanceof Error) {
        console.log(err.message);
    }
    console.log("Error:", err);
}
const data = "Chai aur code"; // this is unkown
const strData = data; // so we make type assertion focefully to make it a specific variable
function redirectBasedonRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashbaord");
        return;
    }
    if (role === "user") {
        console.log("Redirecitng to user dashboard");
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map