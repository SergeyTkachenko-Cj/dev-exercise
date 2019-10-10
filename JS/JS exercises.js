
function calculate(str) {
  let res = '';

  [...str].forEach((i) => {
    if (isNaN(+i)) {
      if (i === 'p') res += '+';
      if (i === 'm') res += '-';
    } else {
      res += i;
    }
  });

  return eval(res).toString();
}

console.log(calculate('1plus2plus3minus4'));

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"
