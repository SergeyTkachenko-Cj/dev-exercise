function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice / (100 / discount)))
}

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));
