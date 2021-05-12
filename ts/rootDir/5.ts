/*
 * @Author: orange 
 * @Date: 2021-04-20 15:57:00 
 * @Last Modified by: orange
 * @Last Modified time: 2021-04-20 16:19:31
 */
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['a', 'b', 'c']
const arr: (number | string)[] = [1, 'a']
const person: { name: string, age: number }[] = [
    {
        name: 'orange',
        age: 18
    }, {
        name: 'alex',
        age: 25
    }
]

// 类型别名
type peopleObj = {
    name: string,
    age: number
}

interface peopleStu {
    name: string,
    age: number
}

const people: peopleStu[] = [
    {
        name: 'orange',
        age: 18
    }, {
        name: 'alex',
        age: 25
    }
]

console.log('people', people);
export { }