'use strict';

function regexVar() {

  let re = new RegExp(/(^a\w+a$)|(^o\w+o$)|(^e\w+e$)|(^i\w+i$)|(^u\w+u$)/g);

  return re;
}