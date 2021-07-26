/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 * 示例：
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 */

/**
 * 第一种需要使用新的数组
 * @param nums 
 * @param k 
 */
const rotate = (nums: number[], k: number): void => {
    let arr: number[] = []
    for (let i = 0; i < nums.length; ++i) {
        arr[(i + k) % nums.length] = nums[i]
    }
    for (let j = 0; j < nums.length; j++) {
        nums[j] = arr[j]
    }

};

const nums: number[] = [1, 2, 3, 4, 5, 6, 7]
const k: number = 3
console.log(rotate(nums, k));

// 第二种直接有现有的数组