'use strict';

function vowelsAndConsonants(s) {
  let rgx = new RegExp('[a|o|e|i|u|y]');
  let conson = [];
    // for (let i = 0; i < s.length; i++) {
    //   rgx.test(s[i]) ? console.log(s[i]) : true
    // }

    // for (let i = 0; i < s.length; i++) {
    //   rgx.test(s[i]) ? true : console.log(s[i])
    // }

    s.split('').forEach(function(i) {
        rgx.test(i) ? console.log(i) : conson.push(i)
    });

    conson.forEach(function(i) {
        console.log(i);
    });
}

vowelsAndConsonants("javascriptloops");