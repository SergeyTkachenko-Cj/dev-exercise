
export function getSum(a: number, b: number): number {
let strt: number = a < b ? a : b;
  let fin: number = strt === a ? b : a;
  let res: number = 0;
    for (strt; strt <= fin; strt++) {
      res += strt;
    }
  return res
}

console.log(getSum(5, -1)); // 14
console.log(getSum(0, 1)); // 0 + 1 = 1
console.log(getSum(1, 1)); // 1 Since both are same
console.log(getSum(-1, 2)); // -1 + 0 + 1 + 2 = 2