"use strict";
exports.__esModule = true;
exports.digitalRoot = function (n) {
    return n < 10 ? n : exports.digitalRoot(eval(n.toString().split('').join('+')));
};
console.log(exports.digitalRoot(16)); // 7
console.log(exports.digitalRoot(456)); // 6
