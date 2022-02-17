"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var singleNumber = function (nums) {
    var l = nums.length;
    if (l === 1) {
        return nums[0];
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    console.log(nums);
    for (var i = 0; i < l; i++) {
        if (nums[i + 1] - nums[i] > 0) {
            return nums[i];
        }
        else if (nums[i + 1] - nums[i] == 0 && (i + 1) !== (nums.length - 2)) {
            i += 1;
        }
        else if (nums[i + 1] - nums[i] == 0 && (i + 1) == (nums.length - 2)) {
            return nums[nums.length - 1];
        }
    }
};
var nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
var singleNumber1 = function (nums) {
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        ans = ans ^ nums[i];
        console.log('ans', ans);
    }
    return ans;
};
console.log(singleNumber1(nums));
