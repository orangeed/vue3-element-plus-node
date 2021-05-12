/**
 * 类的访问类型 public private  protected
 * public 公有： 类的内部和外部都可以访问到的
 * private 私有： 只能类的内部能够访问
 * protected 保护性的： 和private类似，同样类的内部能够访问，外部不能访问，但是类的继承时候可以访问，而private不能。
 * */
class Person {
    name: string
    private age: number
    public sayHello() {
        this.age = 25
        console.log(`${this.name}说你好呀！我今年${this.age}岁啦`);
    }
    protected sex: string
}

class Teacher extends Person {
    sex = '男'
    saySex() {
        console.log(`我的性别是${this.sex}`);
    }
}

const people = new Person()
const teacher = new Teacher()
people.name = 'orange'
people.sayHello()
teacher.saySex()
console.log(people);
export { }
