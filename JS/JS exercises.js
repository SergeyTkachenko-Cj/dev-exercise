"use strict";
exports.__esModule = true;
function countLettersAndDigits(input) {
    return input.replace(/[^\w]|_/g, '').length;
}
exports.countLettersAndDigits = countLettersAndDigits;
console.log(countLettersAndDigits("hel2!lo")); // 6
console.log(countLettersAndDigits("n!!ice!!123")); // 7
console.log(countLettersAndDigits("1")); // 1
console.log(countLettersAndDigits("?")); // 0
