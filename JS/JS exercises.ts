export function getW(height: number): string {
  
  const arr: Array<string> = [];
  const str: string = '*';
  const empt_str: string = ' ';
  let space: number = (height + (height - 1)) - 2;

  if (space < 0) return ''

    for (let i = 0; i < height; i++) {
      switch (i) {
        case 0:
          arr.push(`${empt_str.repeat(i)}${str}${(empt_str.repeat(space) + str).repeat(2)}${empt_str.repeat(i)}`);
          break;
        case height - 1:
          arr.push(`${empt_str.repeat(i)}${str}${(empt_str.repeat(space) + str).repeat(1)}${empt_str.repeat(i)}`);
          break;
        default:
          arr.push(`${empt_str.repeat(i) + str + empt_str.repeat(space) + str + empt_str.repeat(i + (i - 1)) + str + empt_str.repeat(space) + str}${empt_str.repeat(i)}`);
      }
      space = space > 1 ? space - 2 : (height + (height - 1)) - 2;
    }

  return arr.join('\n')
}

console.log(getW(5));

//      2
// [
//   "* * *", 
//   " * * "
// ]

//      3
// [
//   "*   *   *", 
//   " * * * * ", 
//   "  *   *  "
// ]

//      4
// [
//   "*     *     *", 
//   " *   * *   * ", 
//   "  * *   * *  ",
//   "   *     *   "
// ]