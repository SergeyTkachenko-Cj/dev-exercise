
function* fib(): Generator {
  let cur: number = 0;
  let next: number = 1;
    while (true) {
      next = next + cur;
      cur = next - cur;
      yield next + cur
    }
}

const gen = fib();

console.log(gen.next().value); 
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value);
