'use strict';

(function reverseString(s) {

    try {
      console.log(s.split('').reverse().join(''));
    }
    catch(e) {
      console.log(e.message);
      console.log(s);
    }
})("1234");

(function isPositive(a) {

    try {
      if (a > 0) return 'YES'
      else if (a === 0) throw 'Zero Error';
      else if (a < 0) throw 'Negative Error';
    }
    catch (err) {
      console.log(err);
    }
    finally { console.log(a) }
})(-2);

(function tryCatch(inpt) {

    try {
      if (!inpt) throw "Not a number";
    }
    catch(e) {
      console.log(e);
    }
})(0);

(function profiles() {
    var contacts = [
        {
            "firstName": "Akira",
            "lastName": "Laine",
            "number": "0543236543",
            "likes": ["Pizza", "Coding", "Brownie Points"]
        },
        {
            "firstName": "Harry",
            "lastName": "Potter",
            "number": "0994372684",
            "likes": ["Hogwarts", "Magic", "Hagrid"]
        },
        {
            "firstName": "Sherlock",
            "lastName": "Holmes",
            "number": "0487345643",
            "likes": ["Intriguing Cases", "Violin"]
        },
        {
            "firstName": "Kristian",
            "lastName": "Vos",
            "number": "unknown",
            "likes": ["JavaScript", "Gaming", "Foxes"]
        }
    ];


    function lookUpProfile(name, prop) {

        try { 
          let res = "";

          contacts.forEach(function(i) {
              if (i.firstName === name) {
                i[prop] ? res = i[prop] : res = "No such property"
              }
          });

          throw res ? res : "No such name"
        }
        catch(err) { 
          console.log(err); 
        }
    }

    lookUpProfile("Kristian", "likes");
})();