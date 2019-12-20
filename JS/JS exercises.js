"use strict";
exports.__esModule = true;
function meeting(s) {
    return s.split(';')
        .map(function (i) { return "(" + i.toUpperCase().split(':').reverse().join(', ') + ")"; })
        .sort()
        .join('');
}
exports.meeting = meeting;
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
// console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));
