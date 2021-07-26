/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 示例1：
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 * 示例2：
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 */

/**
 * 
 * @param nums 
 * @param target 
 * @returns 
 */
const searchInsert = function (nums: number[], target: number) {
    let left = 0 //定义左边边界
    let right = nums.length //定义右边边界
    //当左边的值小于右边的时候循环
    while (left < right) {
        //获取一个中间值
        const mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] > target) {
            //如果当前值大于目标值，说明答案在左边，缩紧右边的边界
            right = mid
        } else if (nums[mid] < target) {
            //如果当前值小于目标值，说明答案在右边，缩紧左边的边界
            left = mid + 1
        } else {
            // 如果当前值和目标值相同，则返回当前的索引
            return mid
        }
    }
    // 如果不存在的话  返回右边的边界值，也就是将要插入的索引
    return right

};

const nums: number[] = [1, 3, 5, 6];
const target: number = 2
console.log(searchInsert(nums, target));

export { }