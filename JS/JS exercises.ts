
const nbYear = (p0, percent, aug, p) => {
  let z:number = 0;
    const x = (arg: any): number => {
      z++;
      p0 = arg + (arg * (percent)/100) + aug;
      return p0 < p ? x(p0) : p0
    }
    x(p0);
  return z
}

console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.0, 10000, 2000000)); // 50
