"use strict";
var plusOne = function (digits) {
    var l = digits.length;
    if (digits[l - 1] < 9) {
        digits[l - 1] += 1;
    }
    else {
        for (var i = digits.length - 2; i >= 0; i--) {
            console.log('第一个', digits[i]);
            digits[i]++;
            console.log('第二个', digits[i]);
            digits[i] %= 10;
            console.log('第三个', digits[i]);
            if (digits[i] !== 0)
                return digits;
        }
        digits.unshift(1);
    }
    return digits;
};
var digits = [8, 9, 9];
console.log(plusOne(digits));
