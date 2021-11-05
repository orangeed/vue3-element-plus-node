"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeElement = function (nums, val) {
    var left = 0, right = nums.length;
    if (right === 0)
        return 0;
    if (val === undefined)
        return right;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        }
        else {
            left++;
        }
        console.log('交换后的数据', left, nums);
    }
    return left;
};
var nums = [4, 4, 0, 1, 0, 2], val = 0;
console.log('removeElement', removeElement(nums, val));
