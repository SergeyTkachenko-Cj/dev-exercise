
export const digitalRoot = (n:number):number => {
  return n < 10 ? n : digitalRoot(eval(n.toString().split('').join('+')))
};

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6
