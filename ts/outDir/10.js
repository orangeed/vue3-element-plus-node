"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, '何星涵') || this;
        _this.age = age;
        console.log(_this.name + "\u4ECA\u5E74" + _this.age + "\u5C81");
        return _this;
    }
    return Teacher;
}(Person));
var people = new Person('orange');
console.log(people.name);
var teacher = new Teacher(24);
console.log(teacher);
