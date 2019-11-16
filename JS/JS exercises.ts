
export const factorial = (n: number): number => {
  return n > 1 ? n * factorial(n - 1) : 1
};

console.log(factorial(5));  // 120