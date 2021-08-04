"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rotate = function (nums, k) {
    var arr = [];
    for (var i = 0; i < nums.length; ++i) {
        arr[(i + k) % nums.length] = nums[i];
    }
    console.log(arr);
    for (var j = 0; j < nums.length; j++) {
        nums[j] = arr[j];
    }
    console.log(nums);
};
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
rotate(nums, k);
var rotate1 = function (nums, k) {
    function reverse(nums, start, end) {
        while (start < end) {
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    k = k % nums.length;
    console.log(k);
    reverse(nums, 0, nums.length - 1);
    console.log(nums);
    reverse(nums, 0, k - 1);
    console.log(nums);
    reverse(nums, k, nums.length - 1);
    console.log(nums);
};
rotate1(nums, k);
