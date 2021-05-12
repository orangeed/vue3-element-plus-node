/*
 * @Author: orange 
 * @Date: 2021-04-19 16:53:50 
 * @Last Modified by: orange
 * @Last Modified time: 2021-04-20 15:30:17
 */
// 基础类型
const count: number = 18
const username: string = '橘子'
// 效果是和接口类一样的
const person: {
    name: string,
    age: number
} = {
    name: 'orange',
    age: 18
}

// 对象类型
// 数组形式
const personArr: string[] = ['1', '2', '3']

/**
 * 定义一个类，定义一个常量，常量属于personObj，并且new一个对象。
 */
class personObj { }
const orange: personObj = new personObj()

/**
 * 函数形式
 */
const oranges: () => string = () => { return 'orange' }

let num = 1
export {}