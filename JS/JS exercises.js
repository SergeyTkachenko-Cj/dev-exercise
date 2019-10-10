
function calculate(str) { 
  return eval(str.split('plus').join('+').split('minus').join('-')).toString();
}

console.log(calculate("1plus2plus3minus4"));

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"