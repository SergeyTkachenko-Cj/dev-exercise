
function divisors(integer) {
  const res = [];
  for (let i = 2; i < integer; i++) {
    const divide = integer / i;
    if (!(Math.trunc(divide) - divide)) res.push(divide);
  }
  return res.length ? res.reverse() : `${integer} is prime`;
}

console.log(divisors(12)); // should return [2,3,4,6]
// console.log(divisors(25)); // should return [5]
// console.log(divisors(13)); // should return "13 is prime"
