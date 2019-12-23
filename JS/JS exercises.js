"use strict";
exports.__esModule = true;
function comp(a1, a2) {
    return a1 && a2 ? a1.map(function (i) { return i * i; }).sort().toString() === a2.sort().toString() : false;
}
exports.comp = comp;
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp(null, null));
console.log(comp([], []));
