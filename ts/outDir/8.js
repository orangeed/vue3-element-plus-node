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
var person = (function () {
    function person() {
        this.content = '你好呀';
    }
    person.prototype.say = function () {
        return this.content;
    };
    return person;
}());
var man = (function (_super) {
    __extends(man, _super);
    function man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    man.prototype.say = function () {
        return '这个是重写了父类的内容';
    };
    man.prototype.sayN = function () {
        return _super.prototype.say.call(this) + '何星涵！';
    };
    man.prototype.syaLove = function () {
        return 'I Love You';
    };
    return man;
}(person));
var people = new person();
var Man = new man();
console.log(people.say());
console.log(Man.say());
console.log(Man.sayN());
console.log(Man.syaLove());
