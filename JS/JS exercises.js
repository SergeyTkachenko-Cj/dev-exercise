"use strict";
exports.__esModule = true;
function oddOrEven(array) {
    return (array.reduce(function (acc, cur) { return acc + cur; }, 0) % 2) ? 'odd' : 'even';
}
exports.oddOrEven = oddOrEven;
console.log(oddOrEven([0])); // 'even'
console.log(oddOrEven([1])); // 'odd'
console.log(oddOrEven([0, -1, -5])); // 'even'
console.log(oddOrEven([])); // 'even'
