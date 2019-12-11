"use strict";
exports.__esModule = true;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.validation = function (item) {
        var arr = item.split(' ');
        return arr.length == 4 &&
            /^\d+$/.test(arr[1]) &&
            /\./.test(arr[2]) &&
            /B|S/.test(arr[3]) &&
            { status: arr[3], sum: +arr[1] * +arr[2] };
    };
    G964.balanceStatements = function (list) {
        var arr = list.split(/, /);
        var bad = [];
        var buy = 0;
        var sell = 0;
        arr.forEach(function (i) {
            var itemValid = G964.validation(i);
            if (itemValid) {
                itemValid.status == 'B' ? buy += itemValid.sum : sell += itemValid.sum;
            }
            else {
                if (i)
                    bad.push(i);
            }
        });
        return "Buy: " + Math.round(buy) + " Sell: " + Math.round(sell)
            + (bad.length ? "; Badly formed " + bad.length + ": " + bad.join(' ;') + " ;" : "");
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.balanceStatements("GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S"));
//  "Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;"
// console.log(G964.balanceStatements("ZNGA 1300 2.66, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S"));
//  "Buy: 0 Sell: 26041; Badly formed 1: ZNGA 1300 2.66 ;"
