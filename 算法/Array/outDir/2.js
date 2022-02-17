"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search = function (nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (nums[mid] === target)
            return mid;
        if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
};
var nums = [-1, 0, 3, 5, 9, 12];
var target = 2;
search(nums, target);
console.log(search(nums, target));
