
function sumOfDifferences(arr: Array<number>): number {
  return eval(arr.sort((a, b) => b - a)
                 .map((item, index) => item - arr[index + 1])
                 .slice(0, arr.length - 1)
                 .join('+')
              ) || 0
}

console.log(sumOfDifferences([2, 1, 10])); // 9
