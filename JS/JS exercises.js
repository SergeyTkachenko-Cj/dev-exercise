
const catchSignChange = (arr) => (!arr.length ? 0 : arr.slice(1).filter((item, index) => (Math.abs(item) > item) !== (Math.abs(arr[index]) > arr[index])).length);


console.log(catchSignChange([1, 3, 4, 5])); // 0
console.log(catchSignChange([1, -3, -4, 0, 5])); // 2
console.log(catchSignChange([])); // 0
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77])); // 3
