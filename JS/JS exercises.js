'use strict';

const factorialRecursion = (f) => f === 1 ? f : factorialRecursion(f - 1) * f

const factorialLoop = (f) => {
	let res = 1;
		for (let i = f; i > 0; i--) res *= i;
	return res
}

console.log(factorialRecursion(4));
console.log(factorialLoop(4));


