// 泛型
const orange = <T>(first: T, second: T) => {
    console.log(`${first}${second}`);
}
orange<string>('我是', '何星涵！')
orange<number>(2, 3)
// 多个泛型
const orange1 = <T, P>(first: T, second: P) => {
    console.log(`${first}${second}`);
}
orange1<string, number>('我是何星涵！今年', 23)
// 泛型中数组的使用
// 方法一
const myFun = <T>(arr: T[]) => {
    console.log(arr);
}
myFun<string>(['1', '2']) //这里的尖括号里面是数组内部值的类型
// 方法二
const myFun1 = <T>(arr: Array<T>) => {
    console.log(arr);
}
myFun1<number>([1, 2, 3])
// 对象泛型使用
// 正常情况下
class SelectFruit {
    constructor(private name: string[]) { }
    getName(index: number): string {
        return this.name[index]
    }
}
const selectFruit = new SelectFruit(['orange', 'apple'])
console.log(selectFruit.getName(1));
// 假如是联合类型的话
class SelectFruit1 {
    constructor(private name: string[] | number[]) { }
    getName(index: number): string | number {
        return this.name[index]
    }
}
const selectFruit1 = new SelectFruit1([1333, 123])
console.log(selectFruit1.getName(1));
// 如果是联合类型，这可以使用泛型
class SelectFruit3<T> {
    constructor(private name: T[]) { }
    getName(index: number): T {
        return this.name[index]
    }
}
const selectFruit3 = new SelectFruit3<string | number>(['orange', 'apple', 111])
console.log(selectFruit3.getName(1));
// 泛型继承
interface Fruits {
    name: string
}
class SelectFruit4<T extends Fruits> {
    constructor(private name: T[]) { }
    getName(index: number): string {
        return this.name[index].name
    }
}
const selectFruit4 = new SelectFruit4([
    {
        name: 'orange'
    },
    {
        name: 'apple'
    }
])
console.log(selectFruit4.getName(0));
// 泛型约束
class SelectFruit5<T extends string | number> {
    constructor(private name: T[]) { }
    getName(index: number): T {
        return this.name[index]
    }
}
const selectFruit5 = new SelectFruit5<string | number>(['orange', 'apple', 111])
console.log(selectFruit5.getName(0));