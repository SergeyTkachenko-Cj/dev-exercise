"use strict";
exports.__esModule = true;
function sumTriangularNumbers(n) {
    var x = [0];
    for (var i = 1; i <= n; i++) {
        x.push(i + x[i - 1]);
    }
    return x.reduce(function (acc, cur) { return acc + cur; });
}
exports.sumTriangularNumbers = sumTriangularNumbers;
console.log(sumTriangularNumbers(6)); // 56
console.log(sumTriangularNumbers(34)); // 7140
console.log(sumTriangularNumbers(-291)); // 0
