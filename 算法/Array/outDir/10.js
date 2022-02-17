"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var twoSum = function (numbers, target) {
    var left = 0, right = numbers.length, sum = 0;
    if (right === 0)
        return [];
    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (sum === target)
            return [left + 1, right + 1];
        sum < target ? left++ : right--;
    }
};
var number = [2, 3, 4];
var target = 6;
console.log(twoSum(number, target));
