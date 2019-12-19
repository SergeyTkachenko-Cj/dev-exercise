"use strict";
exports.__esModule = true;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.stockList = function (listOfArt, listOfCat) {
        var listStr = listOfArt.join(',');
        var resArr = listOfCat.map(function (i) {
            var re = new RegExp("\\b(" + i + ")\\w+\\s(\\d+)", "g");
            var numb = 0;
            var execute = function () {
                var reCheck = re.exec(listStr);
                if (reCheck) {
                    numb += +reCheck[2];
                    execute();
                }
            };
            execute();
            return "(" + i + " : " + numb + ")";
        });
        return !listStr.length ? '' : resArr.join(' - ');
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));
//  "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
// console.log(G964.stockList([], ["A", "B", "C", "D"]));
//  ''
