"use strict";
exports.__esModule = true;
function vertMirror(strng) {
    return strng.split('\n').map(function (i) { return i.split('').reverse().join(''); }).join('\n');
}
exports.vertMirror = vertMirror;
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}
exports.horMirror = horMirror;
function oper(fct, s) {
    return fct(s);
}
exports.oper = oper;
console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
