export function countLettersAndDigits(input: string): number {
  return input.replace(/[^\w]|_/g, '').length
}

console.log(countLettersAndDigits("hel2!lo"));   // 6
console.log(countLettersAndDigits("n!!ice!!123"));  // 7
console.log(countLettersAndDigits("1"));  // 1
console.log(countLettersAndDigits("?"));  // 0