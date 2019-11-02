function menFromBoys(arr) {
    var evenArr = [];
    var oddArr = [];
    arr.forEach(function (i) { return i % 2 ? oddArr.push(i) : evenArr.push(i); });
    var x = evenArr.sort(function (a, b) { return a - b; }).concat(oddArr.sort(function (a, b) { return b - a; }));
    var count = [];
    return x.filter(function (item) {
        if (x.indexOf(item) === x.lastIndexOf(item)) {
            return true;
        }
        else if (!count.some(function (i) { return i === item; })) {
            count.push(item);
            return true;
        }
    });
}
// console.log(menFromBoys([7, 3, 14, 17])); // [14, 17, 7, 3]
// console.log(menFromBoys([-94, -99, -100, -99, -96, -99]));  // [-100, -96, -94, -99]
console.log(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1])); // [-282, 818, 900, 928, 281, 49, -1]
