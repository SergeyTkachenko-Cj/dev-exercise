"use strict";
exports.__esModule = true;
function growingPlant(up, down, h) {
    var res = 0;
    var days = 0;
    for (var i = 0; res < h; i++) {
        i % 2 ? res -= down : res += up;
        days++;
    }
    return Math.ceil(days / 2) || 1;
}
exports.growingPlant = growingPlant;
console.log(growingPlant(100, 10, 910)); // 10
console.log(growingPlant(10, 9, 4)); // 1
console.log(growingPlant(43, 13, 959)); // 32
