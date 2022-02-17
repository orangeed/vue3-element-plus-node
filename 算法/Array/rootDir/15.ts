/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例 1：
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 * 示例 2：
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 * 示例 3：
 * 输入：digits = [0]
 * 输出：[1]
 */

// const plusOne = (digits: number[]): number[] => {
//     let digitsStr: string = ''
//     for (let i = 0; i < digits.length; i++) {
//         digitsStr += digits[i].toString()
//     }
//     console.log('digitsStr', parseInt(digitsStr) + 1);
//     digits = [];
//     (parseInt(digitsStr) + 1).toString().split('').forEach(v => {
//         digits.push(parseInt(v))
//     })
//     return digits
// };
const plusOne = (digits: number[]): number[] => {
    let l: number = digits.length
    // 如果数组的最后一位是小于9不需要进位，直接加1
    if (digits[l - 1] < 9) {
        digits[l - 1] += 1
    } else {
        // 如果需要进位
        for (let i = digits.length - 2; i >= 0; i--) {
            console.log('第一个', digits[i]);
            // 从后往前遍历，每次若继续遍历，说明有进位情况产生
            // 当前值都加一
            digits[i]++;
            console.log('第二个', digits[i]);
            // 当前值除以10取余
            digits[i] %= 10;
            console.log('第三个', digits[i]);
            // 若余10后为零，说明已进位，进行下一次循环，若不为零，直接得出结果数组
            if (digits[i] !== 0) return digits;
        }
        // 若进行到这一步，说明全部都进位了，原数组为长为digits.length的全为9的数组，如[9, 9, 9]等
        // 则现在的digits数组全为零，然后需要最高位进一
        digits.unshift(1)
    }
    return digits
};

// const plusOne = (digits: number[]): number[] => {
//     let n = digits.length, carry = 0;
//     // 如果数组的最后一位是小于9不需要进位，直接加1
//     if (digits[n - 1] < 9) {
//         digits[n - 1] += 1;
//     } else {
//         // 如果数组最后一位是9，则需要进一位
//         // 所以数组的最后一定是0
//         digits[n - 1] = 0;
//         // 进一位
//         carry = 1;
//         // 从倒数第二位开始遍历数组
//         for (let i = n - 2; i >= 0; i--) {
//             // 同样当数组的值小于9的时候加一
//             if (digits[i] < 9) {
//                 digits[i] += 1;
//                 carry = 0;
//                 break;
//             } else {
//                 // 如果是9的话，则需要进一位，该位次一定是0
//                 digits[i] = 0;
//             }
//         }
//         // 如果值大于1，则在数组的最开始添加1
//         if (carry > 0) {
//             digits.unshift(carry);
//         }
//     }
//     return digits;
// }


// const digits: Array<number> = [1, 2, 3]
// const digits: Array<number> = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 0, 0, 0]
const digits: Array<number> = [8, 9, 9]

console.log(plusOne(digits));