export function noOdds(values: number[]): number[] {
  return values.filter(i => !(i % 2))
}

console.log(noOdds([0,1])); // [0]
console.log(noOdds([0,1,2,3])); // [0,2]
