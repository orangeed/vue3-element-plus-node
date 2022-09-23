/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 1.交换位置
 * 2.双指针
 */

// const moveZeroes = (nums: number[]): number[] => {
//     for (let i = 0, j = 0; j < nums.length; j++) {
//         // if (nums[j] === 0) continue;
//         // [nums[i++], nums[j]] = [nums[j], nums[i]]
//         if (nums[j] !== 0) {
//             [nums[i++], nums[j]] = [nums[j], nums[i]]
//         }
//     }
//     return nums
// };

const nums = [0, 1, 0]

// // moveZeroes(nums)

// console.log('交换位置', moveZeroes(nums));


const moveZeroes1 = (nums: number[]): number[] => {
    let left: number = 0
    let right: number = nums.length - 1
    while (left < right) {
        if (nums[left] === 0) {
            nums.splice(left, 1)
            nums.push(0)
            right--
        } else {
            left++
        }
    }
    return nums
}
console.log('双指针', moveZeroes1(nums));

export { }