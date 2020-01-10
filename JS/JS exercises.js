"use strict";
exports.__esModule = true;
function cleanString(s) {
    var res = [];
    s.split('').forEach(function (element) {
        element.match(/#/) ? res.splice(res.length - 1) : res.push(element);
    });
    return res.join('') || '';
}
exports.cleanString = cleanString;
console.log(cleanString('abc#d##c')); // 'ac'
console.log(cleanString('abc##d#####')); // ''
console.log(cleanString('####d##c#')); // ''
console.log(cleanString('a#bc#d')); // 'bd'
