"use strict";
exports.__esModule = true;
function solution(roman) {
    var decode = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    return roman.split('')
        .reverse()
        .map(function (i) { return decode[i]; })
        .reduce(function (acc, cur, indx, arr) {
        return arr[indx - 1] > cur ? acc - cur : acc + cur;
    });
}
exports.solution = solution;
// console.log(solution('XXI')); // 21
// console.log(solution('IV')); // 4
console.log(solution('MCMXC')); // 1990
