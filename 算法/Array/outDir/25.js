"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countAndSay = function (n) {
    if (n === 1)
        return '1';
    var str = '';
    var strArr = countAndSay(n - 1).match(/(\d)\1*/g);
    for (var j = 0; j < strArr.length; j++) {
        str = str + strArr[j].length + strArr[j].split('')[0];
    }
    return str;
};
var countAndSay1 = function (n) {
    var str = '1';
    for (var i = 1; i < n; i++) {
        str = str.replace(/(\d)\1*/g, function (item) { return "" + item.length + item[0]; });
    }
    return str;
};
var n = 4;
console.log(countAndSay(n));
console.log(countAndSay1(n));
