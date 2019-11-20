
export function solution(roman: string): number {

  const decode: any = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  return roman.split('') 
              .reverse()  
              .map(i => decode[i])
              .reduce((acc, cur, indx, arr) => {
                return arr[indx - 1] > cur ? acc - cur : acc + cur
              });
}

// console.log(solution('XXI')); // 21
// console.log(solution('IV')); // 4
console.log(solution('MCMXC')); // 1990