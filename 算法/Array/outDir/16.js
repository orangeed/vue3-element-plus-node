"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var twoSum = function (nums, target) {
    var n = nums.length;
    if (n === 0)
        return [];
    var arr = Array.from(nums).sort(function (a, b) { return a - b; });
    var left = 0, right = n - 1, sum = 0;
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === target)
            return [nums.indexOf(arr[left]), nums.lastIndexOf(arr[right])];
        sum < target ? left++ : right--;
    }
};
var nums = [3, 3];
var target = 6;
console.log(twoSum(nums, target));
