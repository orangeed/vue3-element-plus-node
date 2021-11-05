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
var isValid = function (s) {
    var e_1, _a;
    if (s.length % 2 !== 0)
        return false;
    var pairs = new Map([[')', '('], [']', '['], ['}', '{']]);
    console.log('pairs', pairs);
    var stk = [];
    try {
        for (var s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
            var item = s_1_1.value;
            console.log('item', item);
            console.log('has', pairs.has(item));
            console.log('get', pairs.get(item));
            console.log('开始stk', stk);
            if (pairs.has(item)) {
                if (!stk.length || stk[stk.length - 1] !== pairs.get(item)) {
                    return false;
                }
                stk.pop();
            }
            else {
                stk.push(item);
            }
            console.log('获取数据后的stk', stk);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (s_1_1 && !s_1_1.done && (_a = s_1.return)) _a.call(s_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    console.log('最后的stk', stk);
    return !stk.length;
};
var s = "()]]";
console.log('结果', isValid(s));
