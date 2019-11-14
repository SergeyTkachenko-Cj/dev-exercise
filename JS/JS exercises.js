function sumOfDifferences(arr) {
    return eval(arr.sort(function (a, b) { return b - a; })
        .map(function (item, index) { return item - arr[index + 1]; })
        .slice(0, arr.length - 1)
        .join('+')) || 0;
}
console.log(sumOfDifferences([2, 1, 10])); // 9
