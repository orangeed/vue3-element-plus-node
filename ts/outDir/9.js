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
    function Person() {
    }
    Person.prototype.sayHello = function () {
        this.age = 25;
        console.log(this.name + "\u8BF4\u4F60\u597D\u5440\uFF01\u6211\u4ECA\u5E74" + this.age + "\u5C81\u5566");
    };
    return Person;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sex = '男';
        return _this;
    }
    Teacher.prototype.saySex = function () {
        console.log("\u6211\u7684\u6027\u522B\u662F" + this.sex);
    };
    return Teacher;
}(Person));
var people = new Person();
var teacher = new Teacher();
people.name = 'orange';
people.sayHello();
teacher.saySex();
console.log(people);
