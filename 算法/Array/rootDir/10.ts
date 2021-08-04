/**
 * 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 示例 1：
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 示例 2：
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 * 示例 3：输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 */

/**
 * 升序排列
 * 滑动双指针，设置了两个指针，一个左边，一个右边，当左边的值小于右边的值时，同时从两端开始遍历，当两边的值相加等于目标值的时候，返回下标，当和小于目标值的时候左边的指针向前移动一位，当大于目标值的时候右边的指针向左移动一位。
 * @param numbers 
 * @param target 
 * @returns 
 */
const twoSum = (numbers: number[], target: number): number[] => {
    // 定义两个指针，一个求和值
    let left: number = 0, right: number = numbers.length, sum: number = 0
    if (right === 0) return []
    while (left < right) {
        sum = numbers[left] + numbers[right]
        if (sum === target) return [left + 1, right + 1]
        sum < target ? left++ : right--
    }
};
const number: number[] = [2, 3, 4]
const target: number = 6
console.log(twoSum(number, target));
export { }