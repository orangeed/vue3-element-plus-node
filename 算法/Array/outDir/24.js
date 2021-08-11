"use strict";
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};
var strStr1 = function (haystack, needle) {
    var hl = haystack.length, nl = needle.length;
    if (hl === 0 && nl === 0)
        return 0;
    for (var i = 0; i < hl; i++) {
        if (haystack.substring(i, i + nl) === needle)
            return i;
    }
    return -1;
};
var haystack = "hello", needle = "ll";
console.log(strStr1(haystack, needle));
