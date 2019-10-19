// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum

const powers = n => {
  return n.toString(2).split('').reverse().map((a, b) => +a ? Math.pow(2, b) : 0).filter(i => i)
};

console.log(powers(22));
