"use strict";
exports.__esModule = true;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.balanceStatements = function (list) {
        var regex = /([A-Z])+\s\d+\s(\d+)?\.\d+\s(B|S)/;
        var arr = list.split(',');
        var bad = 0;
        var badStr = '';
        var sumBuy = 0;
        var sumSell = 0;
        var arrFilt = arr.filter(function (i) {
            if (regex.test(i)) {
                /\sB/.test(i) ? sumBuy += +(i.match(/(\d+)?\.\d+/) || [])[0] * +(i.match(/\s\d+/) || []) :
                    sumSell += +(i.match(/(\d+)?\.\d+/) || [])[0] * +(i.match(/\s\d+/) || []);
                return i.match(regex);
            }
            else {
                var noSpace = i.replace(/^\s/, '');
                if (!badStr.length)
                    badStr += ' ' + noSpace + ' ;';
                else {
                    badStr += noSpace + ' ;';
                }
                bad++;
                return false;
            }
        });
        var badly = "; Badly formed " + bad + ":" + badStr;
        arr[0].length ? bad : bad = 0;
        return "Buy: " + Math.round(sumBuy) + " Sell: " + Math.round(sumSell) + (bad ? badly : '');
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.balanceStatements("GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S"));
//  "Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;"
// console.log(G964.balanceStatements("ZNGA 1300 2.66, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S"));
//  "Buy: 0 Sell: 26041; Badly formed 1: ZNGA 1300 2.66 ;"
