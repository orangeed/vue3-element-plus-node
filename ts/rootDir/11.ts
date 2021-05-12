// get和set
class Person {
    constructor(private _age: number) { }
    get age() {
        return this._age + 1
    }
    set age(age: number) {
        this._age = age - 10
    }
}

const people = new Person(22)
console.log(people.age);
people.age = 20
console.log(people.age);

// 非静态类
// class GF {
//     say() {
//         console.log('我是何星涵！');
//     }
// }

// const gf = new GF()
// gf.say()

// 静态类
class GF {
    static say() {
        console.log('我是何星涵！');
    }
}
GF.say()
export { }