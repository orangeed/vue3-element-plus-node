/*
 * @Author: orange 
 * @Date: 2021-04-20 15:23:46 
 * @Last Modified by: orange
 * @Last Modified time: 2021-04-20 15:57:12
 */

// 函数返回类型注解
const number = (a: number, b: number): number => {
    return a + b
}

const num = number(1, 2)

// 函数对象传参注解
const getNumber = ({ one, two }: { one: number, two: number }) => {
    return one + two
}

const total = getNumber({ one: 1, two: 2 })
console.log('total', total);

export { }