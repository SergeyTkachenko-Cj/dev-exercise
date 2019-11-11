
export default function isSquare(n: number): boolean {
  return Math.sqrt(n) % 1 === 0
};

console.log(isSquare(-1));  // false
console.log(isSquare(25));  // true
console.log(isSquare(26));  // false