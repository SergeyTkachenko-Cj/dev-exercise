
export function inviteMoreWomen(L: Array<number>): boolean {
  return L.reduce((acc, cur) => acc + cur) > 0 ? false : true
}

console.log(inviteMoreWomen([1, -1, 1]));
console.log(inviteMoreWomen([-1, -1, -1]));