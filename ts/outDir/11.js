"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(_age) {
        this._age = _age;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age + 1;
        },
        set: function (age) {
            this._age = age - 10;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var people = new Person(22);
console.log(people.age);
people.age = 20;
console.log(people.age);
var GF = (function () {
    function GF() {
    }
    GF.say = function () {
        console.log('我是何星涵！');
    };
    return GF;
}());
GF.say();
