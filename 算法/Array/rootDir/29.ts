/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

示例 1：

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
示例 2：

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * 使用双指针，思路就是如果左指针对应的值等于匹配的值，则右指针的值赋值给左指针对应的值，一直循环，直到左指针大于等于右指针，左指针左边的数据就是需要的数组，左指针就是数组的长度
 * @param nums 
 * @param val 
 * @returns 
 */
const removeElement = (nums: number[], val: number): number => {
    // 定义左指针和右指针
    let left: number = 0, right: number = nums.length
    if (right === 0) return 0
    if (val === undefined) return right
    // 当左指针小于右指针
    while (left < right) {
        // 左指针对应的数据等于匹配的值
        if (nums[left] === val) {
            // 将右指针对应的值赋值给左指针对应的值
            nums[left] = nums[right - 1]
            // 右指针减少一个
            right--
        } else {
            // 如果不匹配的话，左指针加一个继续匹配
            left++
        }
        console.log('交换后的数据', left, nums);
    }
    // 直到左指针大于等于右指针，停止循环，这个时候左指针左边都是删除了这个值得数组，left就是数组的长度
    return left
};
const nums: number[] = [4, 4, 0, 1, 0, 2], val: number = 0
console.log('removeElement', removeElement(nums, val));

export { }