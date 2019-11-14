
export function howMuchILoveYou(petals: number): string {
  const phrase: Array<string> = [
    'I love you', 
    'a little', 
    'a lot', 
    'passionately', 
    'madly', 
    'not at all'
  ];
  return phrase[(petals - 1) % 6]
}

console.log(howMuchILoveYou(6));  // "not at all"
