class person {
    content = '你好呀';
    say() {
        return this.content
    }
}

// 类的继承
class man extends person {
    // 类的重写
    say() {
        return '这个是重写了父类的内容'
    }
    // super关键字，继承父类，然后改写父类
    sayN() {
        return super.say() + '何星涵！'
    }
    syaLove() {
        return 'I Love You'
    }
}

const people = new person()
const Man = new man()

console.log(people.say());
console.log(Man.say());
console.log(Man.sayN());
console.log(Man.syaLove());

export { }