"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number = function (a, b) {
    return a + b;
};
var num = number(1, 2);
var getNumber = function (_a) {
    var one = _a.one, two = _a.two;
    return one + two;
};
var total = getNumber({ one: 1, two: 2 });
console.log('total', total);
