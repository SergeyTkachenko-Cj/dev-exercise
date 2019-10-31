
"use strict";
exports.__esModule = true;
function inviteMoreWomen(L) {
    return L.reduce(function (acc, cur) { return acc + cur; }) > 0 ? true : false;
}
exports.inviteMoreWomen = inviteMoreWomen;
console.log(inviteMoreWomen([1, -1, 1]));
console.log(inviteMoreWomen([-1, -1, -1]));
