/**
 * 删除排序数组中的重复项
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 实例：
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 */

/**
 * 暴力解法，创建一个空的数组，只需要比对原数组中前一个值是否等于后一个值，不等就将其放在新建的数组中
 * @param {Array]} nums
 * @return {number}
 */
let removeDuplicates = (nums:number[]) => {
    let arr: number[] = []
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== nums[index + 1]) {
            arr.push(nums[index])
        }
    }
    console.log(arr);
};

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

removeDuplicates(arr)

/**
 * 双指针解法，慢扫描的指针i，一个快速扫描的指针j，快速扫描判断j所对应的数据和慢指针对应的数据是否一致，不一致的话，将快速扫描得到的值放在慢扫描的位置，然后慢指针对应的值加一个，直到满扫描结束
 * @param {Array} nums 
 * @returns {Number}
 */
let removeDuplicates1 = (nums:number[]) => {
    if (nums.length === 0) {
        return 0
    }
    let i = 1
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j]
            i++
        }

    }
    return i
}

console.log(removeDuplicates1(arr));

export{}