"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortedSquares = function (nums) {
    var n = nums.length;
    var arr = [];
    if (n === 0) {
        return arr;
    }
    var sqr;
    for (var i = 0; i < n; i++) {
        sqr = nums[i] * nums[i];
        arr.push(sqr);
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr;
};
var nums = [-4, -1, 0, 3, 10];
console.log('sortedSquares', sortedSquares(nums));
