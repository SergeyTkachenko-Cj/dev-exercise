export function oddOrEven(array: number[]): string {
  return (array.reduce((acc, cur) => acc + cur, 0) % 2) ? 'odd' : 'even'
}

console.log(oddOrEven([0])); // 'even'
console.log(oddOrEven([1])); // 'odd'
console.log(oddOrEven([0, -1, -5])); // 'even'
console.log(oddOrEven([])); // 'even'