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
    console.log(arr);
    for (let j = 0; j < nums.length; j++) {
        nums[j] = arr[j]
    }
    console.log(nums);

};

const nums: number[] = [1, 2, 3, 4, 5, 6, 7]
const k: number = 3
rotate(nums, k)

/**
 * 第二种直接用现有的数组，先将整个数组翻转，然后将目标值前面翻转，最后将目标值后面翻转
 * @param nums 
 * @param k 
 */
const rotate1 = (nums: number[], k: number): void => {
    // 翻转函数
    function reverse(nums: number[], start: number, end: number) {
        while (start < end) {
            const temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
    }
    // 获取中间值
    k = k % nums.length
    console.log(k);
    // 翻转整个数组
    reverse(nums, 0, nums.length - 1)
    console.log(nums);
    // 翻转中间值前面的数据
    reverse(nums, 0, k - 1)
    console.log(nums);
    // 翻转中间值后面的数据
    reverse(nums, k, nums.length - 1)
    console.log(nums);
};
rotate1(nums, k)


export { }