"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var people = (function () {
    function people() {
        this.name = 'orange';
        this.age = 18;
        this.bust = 88;
    }
    people.prototype.say = function () {
        return 'hello';
    };
    return people;
}());
var boy = {
    name: 'orange',
    age: 25,
    bust: 90,
    size: 60,
    sex: '男',
    say: function () {
        return 'hello';
    },
    kecheng: function () {
        return '我教历史课';
    }
};
var getPreson = function (boy) {
    boy.age && boy.bust && console.log(boy.name + '合格');
    boy.age || boy.bust && console.log(boy.name + '不合格');
};
var logPerson = function (boy) {
    console.log(boy.name + "\u7684\u5E74\u9F84\u4E3A" + boy.age + "\uFF0C\u80F8\u56F4\u4E3A" + boy.bust);
    boy.size && console.log(boy.name + "\u7684\u5E74\u9F84\u4E3A" + boy.age + "\uFF0C\u80F8\u56F4\u4E3A" + boy.bust + "\uFF0C\u5C3A\u5BF8\u4E3A" + boy.size);
    boy.sex && console.log(boy.name + "\u7684\u5E74\u9F84\u4E3A" + boy.age + "\uFF0C\u80F8\u56F4\u4E3A" + boy.bust + "\uFF0C\u5C3A\u5BF8\u4E3A" + boy.size + "\uFF0C\u6027\u522B\u4E3A" + boy.sex);
    boy.say && console.log(boy.say());
    boy.kecheng && console.log(boy.kecheng());
};
getPreson(boy);
logPerson(boy);
