"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var containsDuplicate = function (nums) {
    var l = nums.length;
    if (l === 0) {
        return false;
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < l; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};
var nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
var containsDuplicate1 = function (nums) {
    return new Set(nums).size === nums.length ? false : true;
};
console.log(containsDuplicate1(nums));
