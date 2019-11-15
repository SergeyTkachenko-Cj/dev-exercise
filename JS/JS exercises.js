"use strict";
exports.__esModule = true;
function bmi(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5)
        return "Underweight";
    else if (bmi <= 25.0)
        return "Normal";
    else if (bmi <= 30.0)
        return "Overweight";
    else if (bmi > 30)
        return "Obese";
    return 'undefined';
}
exports.bmi = bmi;
console.log(bmi(90, 1.80));
