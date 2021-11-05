"use strict";
var maxSubArray = function (nums) {
    if (!nums.length) {
        return;
    }
    ;
    var max_ending_here = nums[0];
    var max_so_far = nums[0];
    for (var i = 1; i < nums.length; i++) {
        console.log(max_ending_here, max_so_far);
        max_ending_here = Math.max(nums[i], max_ending_here + nums[i]);
        max_so_far = Math.max(max_so_far, max_ending_here);
    }
    ;
    return max_so_far;
};
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('maxSubArray', maxSubArray(nums));
