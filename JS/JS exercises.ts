
export class G964 {

  public static fromNb2Str = (n: number, sys: Array<number>): string => {
    
    const checkPair = (mod: number) => sys.filter(i => i % mod === 0).length < 2;
    const checkProd = (num: number) => sys.reduce((acc, cur) => acc * cur) > num;
    const moduli = (num: number): string => sys.map(i => `-${num % i}-`).join('');

  return checkProd(n) && checkPair(2) && checkPair(3) ? moduli(n) : 'Not applicable'
  }
}


console.log(G964.fromNb2Str(779, [8,7,5,3])); // "-3--2--4--2-"
// console.log(G964.fromNb2Str(15, [8,6,5])); // "Not applicable"
// console.log(G964.fromNb2Str(187, [8, 7, 5, 3]));  // "-3--5--2--1-"  