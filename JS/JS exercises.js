
function getScore(arr) {
  let cnt = 0;
  let sum = 0;
  let scr = 0;
  let lvl = 0;

  for (let i = 0; i < arr.length; i++) {
    cnt += arr[i];
    
    switch (arr[i]) {
      case 0 : sum = 0;
      break;
      case 1 : sum = 40 + (40 * lvl);
      break;
      case 2 : sum = 100 + (100 * lvl);
      break;
      case 3 : sum = 300 + (300 * lvl);
      break;
      case 4 : sum = 1200 + (1200 * lvl);
    }

    scr += sum;
    if (cnt >= 10) {
      cnt -= 10;
      lvl++;
    }
  }
  return scr
}

// console.log(getScore([0, 1, 2, 3, 4])); // 1640 
// console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3])); // 3300
console.log(getScore([1, 1, 1, 4, 0, 0, 1, 3, 3, 1, 1, 4, 0, 3, 4, 1, 0, 1, 3, 3, 3, 3, 1, 2, 2, 4, 4, 1, 3, 0, 4, 0, 1, 0, 4, 4, 0, 1]));
// 55100