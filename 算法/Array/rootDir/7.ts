/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * 示例1：
 * 输入: [1,2,3,1]
 * 输出: true
 * 示例2：
 * 输入: [1,2,3,4]
 * 输出: false
 */
const containsDuplicate = (nums: number[]): boolean => {
    const l: number = nums.length
    if (l === 0) {
        return false
    }
    nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < l; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
};

const nums: number[] = [1, 2, 3, 4]
// containsDuplicate(nums)
console.log(containsDuplicate(nums));
/**
 * 通过set去重，判读去重后的长度是否和原来的长度相等，相等返回false，不等返回true
 * @param nums 
 * @returns 
 */
const containsDuplicate1 = (nums: number[]): boolean => {
    return new Set(nums).size === nums.length ? false : true
};
console.log(containsDuplicate1(nums));

export { }
