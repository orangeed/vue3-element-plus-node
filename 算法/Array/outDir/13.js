"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intersect = function (nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0)
        return [];
    nums1.sort(function (a, b) {
        return a - b;
    });
    nums2.sort(function (a, b) {
        return a - b;
    });
    var arr = [], top = 0, bottom = 0;
    while (top < nums1.length && bottom < nums2.length) {
        if (nums1[top] === nums2[bottom]) {
            arr.push(nums1[top]);
            top++;
            bottom++;
        }
        else {
            nums1[top] < nums2[bottom] ? top++ : bottom++;
        }
    }
    return arr;
};
var nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersect(nums1, nums2));
