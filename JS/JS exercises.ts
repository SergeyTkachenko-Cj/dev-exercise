
export function growingPlant(up: number, down: number, h: number): number {

  let res: number = 0;
  let days: number = 0;

  for (let i = 0; res < h; i++) {
    i % 2 ? res -= down : res += up;
      days++;
    }

  return Math.ceil(days / 2) || 1
}

console.log(growingPlant(100, 10, 910));  // 10
console.log(growingPlant(10, 9, 4));  // 1
console.log(growingPlant(43, 13, 959)); // 32