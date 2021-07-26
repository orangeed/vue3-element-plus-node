"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var searchInsert = function (nums, target) {
    var left = 0;
    var right = nums.length;
    while (left < right) {
        var mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > target) {
            right = mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return right;
};
var nums = [1, 3, 5, 6];
var target = 2;
console.log(searchInsert(nums, target));
