class Person {
    constructor(public name: string) { }
}

class Teacher extends Person {
    constructor(public age: number) {
        super('何星涵')
        console.log(`${this.name}今年${this.age}岁`);
    }
}

const people = new Person('orange')
console.log(people.name);
const teacher = new Teacher(24)
console.log(teacher);
export { }