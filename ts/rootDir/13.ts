interface Teacher {
    eat: boolean,
    teach: Function
}
interface Student {
    eat: boolean,
    student: Function
}
// 通过as断言类型守护
const judgeWho = (person: Teacher | Student) => {
    if (person.eat) {
        (person as Student).student()
    } else {
        (person as Teacher).teach()
    }
}
const params = {
    eat: false,
    teach: () => {
        console.log('通过as断言类型守护');
    }
}
judgeWho(params)
// 通过in断言类型守护
const judgeWho1 = (person: Teacher | Student) => {
    if ('teach' in person) {
        person.teach()
    } else {
        person.student()
    }
}
const params1 = {
    eat: false,
    teach: () => {
        console.log('通过in断言类型守护');
    }
}
judgeWho1(params1)
// 通过typeof类型判断进行类型守护
const add = (first: string | number, second: string | number) => {
    let result;
    if (typeof first === 'string' || typeof second === 'string') {
        result = Number(first) + Number(second)
        return console.log(result);
    }
    result = first + second
    return console.log(result);
}
add(1, '2')
// 通过instanceof类型判断进行类型守护
class numberObj {
    count: number
}
const add1 = (first: object | numberObj, second: object | numberObj) => {
    let result
    if (first instanceof numberObj && second instanceof numberObj) {
        result = first.count + second.count
        console.log(result);
    } else {
        console.log(0);
    }
}
const params2 = new numberObj
params2.count = 2
// const params3 = new numberObj
// params3.count = 2
const params3 = {
    count: 2
}
add1(params2, params3)
export { }