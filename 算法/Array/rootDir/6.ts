/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 实例：
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 */

const sortedSquares = (nums: number[]): number[] => {
    const n: number = nums.length
    let arr: number[] = []
    if (n === 0) {
        return arr
    }
    let sqr: number
    for (let i = 0; i < n; i++) {
        sqr = nums[i] * nums[i]
        arr.push(sqr)
    }
    arr.sort((a, b) => {
        return a - b
    })
    return arr

};
const nums: number[] = [-4, -1, 0, 3, 10]
// sortedSquares(nums)
console.log('sortedSquares', sortedSquares(nums));
export { }