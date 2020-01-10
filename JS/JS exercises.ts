
export function cleanString(s: string): string {
  const res: Array<string> = [];

  s.split('').forEach(element => {
    element.match(/#/) ? res.splice(res.length - 1) : res.push(element)
  });

  return res.join('') || ''
}

console.log(cleanString('abc#d##c')); // 'ac'
console.log(cleanString('abc##d#####')); // ''
console.log(cleanString('####d##c#')); // ''
console.log(cleanString('a#bc#d')); // 'bd'