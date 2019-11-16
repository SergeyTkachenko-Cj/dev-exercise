"use strict";
exports.__esModule = true;
exports.factorial = function (n) {
    return n > 1 ? n * exports.factorial(n - 1) : 1;
};
console.log(exports.factorial(5)); // 120
