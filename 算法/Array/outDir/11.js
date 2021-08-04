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
var reverseString = function (s) {
    var _a;
    var start = 0, end = s.length - 1;
    if (s.length === 0)
        return [];
    while (start < end) {
        _a = __read([s[start], s[end]], 2), s[end] = _a[0], s[start] = _a[1];
        start++;
        end--;
    }
    return s;
};
var s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
