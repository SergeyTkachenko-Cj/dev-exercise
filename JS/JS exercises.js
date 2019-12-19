"use strict";
exports.__esModule = true;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.fromNb2Str = function (n, sys) {
        var checkPair = function (mod) { return sys.filter(function (i) { return i % mod === 0; }).length < 2; };
        var checkProd = function (num) { return sys.reduce(function (acc, cur) { return acc * cur; }) > num; };
        var moduli = function (num) { return sys.map(function (i) { return "-" + num % i + "-"; }).join(''); };
        return checkProd(n) && checkPair(2) && checkPair(3) ? moduli(n) : 'Not applicable';
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.fromNb2Str(779, [8, 7, 5, 3])); // "-3--2--4--2-"
// console.log(G964.fromNb2Str(15, [8,6,5])); // "Not applicable"
// console.log(G964.fromNb2Str(187, [8, 7, 5, 3]));  // "-3--5--2--1-"  
