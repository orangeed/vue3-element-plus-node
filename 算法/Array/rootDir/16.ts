/**
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 示例 2：
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 示例 3：
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 */

const twoSum = (nums: number[], target: number): number[] => {
    let n: number = nums.length
    if (n === 0) return []
    const arr = Array.from(nums).sort((a, b) => { return a - b })
    let left: number = 0, right: number = n - 1, sum: number = 0
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum === target) return [nums.indexOf(arr[left]), nums.lastIndexOf(arr[right])]
        sum < target ? left++ : right--
    }
};

// const nums: Array<number> = [2, 7, 11, 15]
const nums: Array<number> = [3, 3]

const target: number = 6
console.log(twoSum(nums, target));
export { }