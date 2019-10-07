
function factorial(n)
{
  if (n < 0 || n > 12) throw new RangeError();
  else return n > 0 ? factorial(n - 1) * n : 1
}

console.log(factorial(5));
