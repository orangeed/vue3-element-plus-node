/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 示例 1：
 * 输入：x = 123
 * 输出：321
 * 示例 2：
 * 输入：x = -123
 * 输出：-321
 * 示例 3：
 * 输入：x = 120
 * 输出：21
 * 示例 4：
 * 输入：x = 0
 * 输出：0
 */

/**
 * 如果传入的值是0，则直接返回0，如果不是0， 先判断是正数还是负数，正数为1，负数为-1，将参数转化为字符串，饭后翻转拼接在一起number化，判断number的值是否大于2的31次方，大于返回0，反之返回正确的数
 * @param x 
 * @returns 
 */
const reverse = (x: number): number => {
    // 判断是否是0，是0则返回原来的数
    if (x === 0) {
        return x
    }
    // 检查是正数还是负数
    let dir = x > 0 ? 1 : -1
    // 将数字给绝对值
    let _x = Math.abs(x)
    // 浅拷贝x，并且通过字符串翻转拼接number化
    let resx = Number(Array.from(_x.toString()).reverse().join(''))
    // 判断是否超过32位，是的话返回0，不是的话，返回正确的数
    if (resx >= Math.pow(2, 31)) {
        return 0
    }
    return dir * resx
};

const x: number = 120
console.log(reverse(x));

export { }