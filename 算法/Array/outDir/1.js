"use strict";
var removeDuplicates = function (nums) {
    var arr = [];
    for (var index = 0; index < nums.length; index++) {
        if (nums[index] !== nums[index + 1]) {
            arr.push(nums[index]);
        }
    }
    console.log(arr);
};
var arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates1 = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    var i = 1;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};
console.log(removeDuplicates1(arr));
