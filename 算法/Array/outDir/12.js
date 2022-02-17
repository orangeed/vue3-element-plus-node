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
var reverseWords = function (s) {
    var _a;
    if (s === '')
        return '';
    var arr = s.split(' ');
    var str = '';
    for (var index = 0; index < arr.length; index++) {
        var ele = arr[index].split('');
        var left = 0;
        var right = ele.length - 1;
        while (left < right) {
            _a = __read([ele[left], ele[right]], 2), ele[right] = _a[0], ele[left] = _a[1];
            left++;
            right--;
        }
        var cache = '';
        index !== arr.length - 1 ? cache += ele.join('') + ' ' : cache += ele.join('');
        str += cache;
    }
    return str;
};
var s = "Let's take LeetCode contest";
console.log(reverseWords(s));
