"use strict";
exports.__esModule = true;
function getSum(a, b) {
    var strt = a < b ? a : b;
    var fin = strt === a ? b : a;
    var res = 0;
    for (strt; strt <= fin; strt++) {
        res += strt;
    }
    return res;
}
exports.getSum = getSum;
console.log(getSum(5, -1)); // 14
console.log(getSum(0, 1)); // 0 + 1 = 1
console.log(getSum(1, 1)); // 1 Since both are same
console.log(getSum(-1, 2)); // -1 + 0 + 1 + 2 = 2
