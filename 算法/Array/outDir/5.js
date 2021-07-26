"use strict";
var rotate = function (nums, k) {
    var arr = [];
    for (var i = 0; i < nums.length; ++i) {
        console.log('arr[(i + k) % nums.length]', (i + k) % nums.length);
        arr[(i + k) % nums.length] = nums[i];
    }
    console.log('arr', arr);
    for (var j = 0; j < nums.length; j++) {
        nums[j] = arr[j];
    }
    console.log('nums', nums);
};
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
console.log(rotate(nums, k));
