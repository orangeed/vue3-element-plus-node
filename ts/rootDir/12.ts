// 只读属性
// class Person {
//     public readonly _name: string
//     constructor(name: string) {
//         this._name = name
//     }
// }

// const people = new Person('orange')
// console.log(people._name);

// 抽象类
abstract class Person {
    abstract say(): void
}

class Teacher extends Person {
    say() {
        console.log('我是老师');
    }
}

class Student extends Person {
    say() {
        console.log('我是学生');
    }
}

const teacher = new Teacher()
const student = new Student()
teacher.say()
student.say()
export { }