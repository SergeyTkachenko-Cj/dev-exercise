
export function isValidWalk(walk: string[]) {
  const comp = (arg: Array<RegExp>): number => {
    return arg.map(i => (walk.toString().match(i) || '').length)
              .reduce((acc, cur) => acc - cur ? 0 : acc + cur) 
  }
  return comp([/n/g, /s/g]) + comp([/e/g, /w/g]) === 10
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // false
// console.log(isValidWalk(['w'])); // false
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));  // false