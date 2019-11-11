"use strict";
exports.__esModule = true;
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
exports["default"] = isSquare;
;
console.log(isSquare(-1)); // false
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false
