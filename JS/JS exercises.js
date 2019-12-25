"use strict";
exports.__esModule = true;
function isValidWalk(walk) {
    var comp = function (arg) {
        return arg.map(function (i) { return (walk.toString().match(i) || '').length; })
            .reduce(function (acc, cur) { return acc - cur ? 0 : acc + cur; });
    };
    return comp([/n/g, /s/g]) + comp([/e/g, /w/g]) === 10;
}
exports.isValidWalk = isValidWalk;
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // false
// console.log(isValidWalk(['w'])); // false
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));  // false
