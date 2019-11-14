"use strict";
exports.__esModule = true;
function howMuchILoveYou(petals) {
    var phrase = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'
    ];
    return phrase[(petals - 1) % 6];
}
exports.howMuchILoveYou = howMuchILoveYou;
console.log(howMuchILoveYou(6)); // "not at all"
