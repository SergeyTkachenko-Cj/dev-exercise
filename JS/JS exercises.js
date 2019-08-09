'use strict';

const getSecondLargestArrayNumberSet = (nums) => {
    nums.sort((a, b) => b - a);
    const noDuplicatesArr = Array.from(new Set(nums));
    return noDuplicatesArr[1]
}

const getSecondLargestArrayNumberFilterIncludes = (nums) => {
	const arr = nums.filter((item, index) => !nums.includes(item, index + 1));
    arr.sort((a, b) => b - a);
    return arr[1]
}

console.log(getSecondLargestArrayNumberSet([4,6,9,13,1,13]));
console.log(getSecondLargestArrayNumberFilterIncludes([4,6,9,13,1,13]));