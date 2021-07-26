/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 示例1：
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 
 * 示例2：
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums: number[], target: number) => {
    let low = 0; //定义一个最小值
    let high = nums.length - 1  //定义一个最大值
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)  //中间的索引值
        if (nums[mid] === target) return mid //如果索引值对应的数据是等于目标值的话，返回目标值的索引值
        // 如果索引值对应的数据小于目标值，则说明需要找的目标值在左边
        if (nums[mid] < target) {
            low = mid + 1
        } else {
            // 如果索引值对应的数据小于目标值，则说明需要找的目标值在右边
            high = mid - 1
        }
    }
    // 都不是的话，返回-1
    return -1
};

const nums: number[] = [-1, 0, 3, 5, 9, 12]
const target: number = 2

search(nums, target)
console.log(search(nums, target));

export { }