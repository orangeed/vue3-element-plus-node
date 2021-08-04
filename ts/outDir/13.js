"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var judgeWho = function (person) {
    if (person.eat) {
        person.student();
    }
    else {
        person.teach();
    }
};
var params = {
    eat: false,
    teach: function () {
        console.log('通过as断言类型守护');
    }
};
judgeWho(params);
var judgeWho1 = function (person) {
    if ('teach' in person) {
        person.teach();
    }
    else {
        person.student();
    }
};
var params1 = {
    eat: false,
    teach: function () {
        console.log('通过in断言类型守护');
    }
};
judgeWho1(params1);
var add = function (first, second) {
    var result;
    if (typeof first === 'string' || typeof second === 'string') {
        result = Number(first) + Number(second);
        return console.log(result);
    }
    result = first + second;
    return console.log(result);
};
add(1, '2');
var numberObj = (function () {
    function numberObj() {
    }
    return numberObj;
}());
var add1 = function (first, second) {
    var result;
    if (first instanceof numberObj && second instanceof numberObj) {
        result = first.count + second.count;
        console.log(result);
    }
    else {
        console.log(0);
    }
};
var params2 = new numberObj;
params2.count = 2;
var params3 = {
    count: 2
};
add1(params2, params3);
