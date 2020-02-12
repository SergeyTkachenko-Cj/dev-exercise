"use strict";
exports.__esModule = true;
String.prototype.eightBitNumber = function () {
    return +this >= 0 &&
        +this <= 255 &&
        this.length === (+this).toString().length;
};
console.log("".eightBitNumber()); // false
console.log("0".eightBitNumber()); // true
console.log("00".eightBitNumber()); // false
console.log("197".eightBitNumber()); // true
