"use strict";
exports.__esModule = true;
function noOdds(values) {
    return values.filter(function (i) { return !(i % 2); });
}
exports.noOdds = noOdds;
console.log(noOdds([0, 1])); // [0]
console.log(noOdds([0, 1, 2, 3])); // [0,2]
