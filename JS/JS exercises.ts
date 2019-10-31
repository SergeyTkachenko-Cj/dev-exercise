
export function sumTriangularNumbers(n:number) :number {
  let x: number[] = [0];
  for (let i = 1; i <= n; i++) {
    x.push(i + x[i - 1]);
  }
  return x.reduce((acc, cur) => acc + cur)
}

console.log(sumTriangularNumbers(6)); // 56
console.log(sumTriangularNumbers(34));  // 7140
console.log(sumTriangularNumbers(-291));  // 0