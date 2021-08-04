/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例 1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 示例 2:
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 */
/**
 * 双指针解法，先给两个数组排序，然后给定一个空数组两个指针，一个top指针，一个bottom指针
 * 当两个只针对的值分别小于两个数组的长度的时候循环，当两个两个指针对应的数组值相等的时候,将相等的值push到空数组中，top和bottom指针分别前进一位
 * 当top对应的值大于bottom对应的值的时候，bottom对应的指针前进一位，反之top对应的指针前进一位
 * @param nums1 
 * @param nums2 
 * @returns 
 */
const intersect = (nums1: number[], nums2: number[]): number[] => {
    if (nums1.length === 0 || nums2.length === 0) return []
    nums1.sort((a, b) => {
        return a - b
    })
    nums2.sort((a, b) => {
        return a - b
    })
    let arr: number[] = [], top: number = 0, bottom: number = 0
    while (top < nums1.length && bottom < nums2.length) {
        if (nums1[top] === nums2[bottom]) {
            arr.push(nums1[top])
            top++
            bottom++
        } else {
            nums1[top] < nums2[bottom] ? top++ : bottom++
        }
    }
    return arr
};

const nums1: number[] = [1, 2, 2, 1], nums2: number[] = [2, 2]
// const nums1: number[] = [4, 9, 5], nums2: number[] = [9, 4, 9, 8, 4]
console.log(intersect(nums1, nums2));
export { }