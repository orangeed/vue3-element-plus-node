"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverse = function (x) {
    if (x === 0) {
        return x;
    }
    var dir = x > 0 ? 1 : -1;
    var _x = Math.abs(x);
    var resx = Number(Array.from(_x.toString()).reverse().join(''));
    if (resx >= Math.pow(2, 31)) {
        return 0;
    }
    return dir * resx;
};
var x = 120;
console.log(reverse(x));
