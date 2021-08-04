"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var moveZeroes = function (nums) {
    var l = nums.length;
    if (l === 0) {
        return null;
    }
    for (var i = 0; i < l; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            l--;
            i--;
        }
    }
};
var nums = [0, 0, 1];
console.log(moveZeroes(nums));
var moveZeroes1 = function (nums) {
    var _a;
    var slow = 0;
    var l = nums.length;
    for (var i = 0; i < l; i++) {
        if (nums[i] !== 0) {
            _a = __read([nums[i], nums[slow]], 2), nums[slow] = _a[0], nums[i] = _a[1];
            slow++;
        }
    }
    console.log(nums);
};
moveZeroes1(nums);
