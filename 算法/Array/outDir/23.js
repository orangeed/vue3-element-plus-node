"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var myAtoi = function (s) {
    var e_1, _a;
    s = s.trim();
    var dir = '';
    switch (s[0]) {
        case '-':
            dir = '-';
            s = s.substr(1);
            break;
        case '+':
            s = s.substr(1);
        default:
            break;
    }
    console.log(s);
    var str = '';
    if (!isNaN(Number(s[0]))) {
        try {
            for (var s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
                var v = s_1_1.value;
                console.log(!isNaN(Number(v)));
                if (!isNaN(Number(v)) && v !== ' ') {
                    str += v;
                }
                else {
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (s_1_1 && !s_1_1.done && (_a = s_1.return)) _a.call(s_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        str = '0';
    }
    console.log('str', str);
    var num = Number(dir + str), max = Math.pow(2, 31);
    console.log(num);
    if (num > max - 1)
        return max - 1;
    if (num <= -max)
        return -max;
    if (-max < num && num < max)
        return num;
};
var s = "-2147483648";
console.log(myAtoi(s));
