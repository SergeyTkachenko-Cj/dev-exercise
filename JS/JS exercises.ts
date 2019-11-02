
function menFromBoys(arr: number[]): number[] {
  const evenArr: Array<number> = [];
  const oddArr: Array<number> = [];
  arr.forEach(i => i % 2 ? oddArr.push(i) : evenArr.push(i));
  const x = evenArr.sort((a, b) => a - b).concat(oddArr.sort((a, b) => b - a));
  let count: Array<number> = [];
  return x.filter(item => {
    if (x.indexOf(item) === x.lastIndexOf(item)) {
      return true
    }
    else if (!count.some(i => i === item)) {
      count.push(item);
      return true
    }
  });
}

// console.log(menFromBoys([7, 3, 14, 17])); // [14, 17, 7, 3]
// console.log(menFromBoys([-94, -99, -100, -99, -96, -99]));  // [-100, -96, -94, -99]
console.log(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1])); // [-282, 818, 900, 928, 281, 49, -1]