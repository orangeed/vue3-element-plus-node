"use strict";
var orange = function (first, second) {
    console.log("" + first + second);
};
orange('我是', '何星涵！');
orange(2, 3);
var orange1 = function (first, second) {
    console.log("" + first + second);
};
orange1('我是何星涵！今年', 23);
var myFun = function (arr) {
    console.log(arr);
};
myFun(['1', '2']);
var myFun1 = function (arr) {
    console.log(arr);
};
myFun1([1, 2, 3]);
var SelectFruit = (function () {
    function SelectFruit(name) {
        this.name = name;
    }
    SelectFruit.prototype.getName = function (index) {
        return this.name[index];
    };
    return SelectFruit;
}());
var selectFruit = new SelectFruit(['orange', 'apple']);
console.log(selectFruit.getName(1));
var SelectFruit1 = (function () {
    function SelectFruit1(name) {
        this.name = name;
    }
    SelectFruit1.prototype.getName = function (index) {
        return this.name[index];
    };
    return SelectFruit1;
}());
var selectFruit1 = new SelectFruit1([1333, 123]);
console.log(selectFruit1.getName(1));
var SelectFruit3 = (function () {
    function SelectFruit3(name) {
        this.name = name;
    }
    SelectFruit3.prototype.getName = function (index) {
        return this.name[index];
    };
    return SelectFruit3;
}());
var selectFruit3 = new SelectFruit3(['orange', 'apple', 111]);
console.log(selectFruit3.getName(1));
var SelectFruit4 = (function () {
    function SelectFruit4(name) {
        this.name = name;
    }
    SelectFruit4.prototype.getName = function (index) {
        return this.name[index].name;
    };
    return SelectFruit4;
}());
var selectFruit4 = new SelectFruit4([
    {
        name: 'orange'
    },
    {
        name: 'apple'
    }
]);
console.log(selectFruit4.getName(0));
var SelectFruit5 = (function () {
    function SelectFruit5(name) {
        this.name = name;
    }
    SelectFruit5.prototype.getName = function (index) {
        return this.name[index];
    };
    return SelectFruit5;
}());
var selectFruit5 = new SelectFruit5(['orange', 'apple', 111]);
console.log(selectFruit5.getName(0));
