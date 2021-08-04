/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 示例 1:
 * 输入: [2,2,1]
 * 输出: 1
 * 示例 2:
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * @param nums 
 */
const singleNumber = (nums: number[]): number => {
    const l = nums.length
    if (l === 1) {
        return nums[0]
    }
    nums.sort((a, b) => {
        return a - b
    })
    console.log(nums);
    for (let i = 0; i < l; i++) {
        if (nums[i + 1] - nums[i] > 0) {
            return nums[i]
        } else if (nums[i + 1] - nums[i] == 0 && (i + 1) !== (nums.length - 2)) {
            i += 1
        } else if (nums[i + 1] - nums[i] == 0 && (i + 1) == (nums.length - 2)) {
            return nums[nums.length - 1]
        }
    }
};

const nums: number[] = [4, 1, 2, 1, 2]
console.log(singleNumber(nums));

/**
 * 异或运算
 * @param nums 
 * @returns 
 */
const singleNumber1 = (nums: number[]): number => {
    let ans: number = 0
    for (let i = 0; i < nums.length; i++) {
        ans = ans ^ nums[i]
        console.log('ans', ans);
    }
    return ans
};
console.log(singleNumber1(nums));

export { }
