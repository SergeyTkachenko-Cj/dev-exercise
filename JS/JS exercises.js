'use strict';

(() => {	// arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = ((arr) => {
  const squaredIntegers = arr.map((i) => { if (Number.isInteger(i) && i > 0) return i * i });
  console.log(squaredIntegers.filter((i) => i));
})(realNumberArray);
})();


(() => {	// default parameters
const increment = () => {
  return (number, value = 1) => console.log(number + value)
};
increment()(5,2);
increment()(5);
})();


(() => {	// rest parameter
const sum = (() => (...args) => args.reduce((a, b) => a + b, 0))();
console.log(sum(1, 2, 3)); // 6
})();



(() => {	// spread operator
	const obj1 = { java : 'script', command : 'line' };
	const arr1 = ['java','script','command','line'];

	const obj2 = {...obj1};
	const arr2 = [...arr1];

	console.log(obj2);
	console.log(arr2);
})();





