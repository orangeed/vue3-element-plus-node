"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isPalindrome = function (s) {
    var reg = /[a-z0-9]+/g;
    var _s = s.toLocaleLowerCase().match(reg);
    if (!_s)
        return true;
    var _str = _s.join('');
    var left = 0, right = _str.length - 1;
    while (left < right) {
        if (_str[left] !== _str[right])
            return false;
        left++;
        right--;
    }
    return true;
};
var s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s));
