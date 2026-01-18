"use strict";
// when we narrow down the type we get the suggestions based on what data type variable it is, which in JS isn't possible
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }
    return `Chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala Chai`;
}
// exhaustive check
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai`;
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }
    return `chai order size #${size}`;
}
class KulhadChai {
    serve() {
        return `Serving kulhad chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
    return chai.serve();
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`;
    }
    return `Serving custom chai ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "masala Chai";
            break;
        case "elaichi":
            return "elaichi chai";
            break;
        case "ginger":
            return "giner chai";
            break;
    }
}
function brew(order) {
    if ("spiceLevel" in order) {
        //
    }
}
function isStringArray(arr) {
    //
    return "";
}
//# sourceMappingURL=typeNarrow.js.map