"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.say = function () {
        console.log('我是老师');
    };
    return Teacher;
}(Person));
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.say = function () {
        console.log('我是学生');
    };
    return Student;
}(Person));
var teacher = new Teacher();
var student = new Student();
teacher.say();
student.say();
