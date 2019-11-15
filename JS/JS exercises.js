"use strict";
exports.__esModule = true;
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return new Date(currentDate) <= new Date(expirationDate) && enteredCode === correctCode;
}
exports.checkCoupon = checkCoupon;
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); // true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); // false
