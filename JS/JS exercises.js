
function squaresNeeded(grains) {
  if (!grains) return 0;

  let count = 1;

  for (let i = 1; i < grains; i++) {
    i *= 2;
    count++;
  }

  return count;
}

console.log(squaresNeeded(3));
