/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 说明:
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 */
/**
 * 遍历数组，当值为0的时候删除当前值，然后在数组末尾push一个0，因为是遍历原来的数组，所以删除一个以后，原来的数据长度减1，同时遍历的指针也要减1
 * @param nums
 * @returns
 */
const moveZeroes = (nums: number[]): void => {
    let l: number = nums.length;
    if (l === 0) {
        return null
    }
    for (let i = 0; i < l; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            l--
            i--
        }
    }
};
const nums: number[] = [0, 0, 1];
console.log(moveZeroes(nums));
// moveZeroes(nums);

/**
 * 双指针，设置一个慢指针，然后遍历数组，为快指针，当遍历的值不等于0的时候，交换位置
 * @param nums 
 */
const moveZeroes1 = (nums: number[]): void => {
    let slow: number = 0
    // let fast: number = 0
    let l: number = nums.length
    // while (fast < l) {
    //     if (nums[fast] !== 0) {
    //         [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
    //         slow++
    //     }
    //     fast++
    // }
    for (let i = 0; i < l; i++) {
        if (nums[i] !== 0) {
            [nums[slow], nums[i]] = [nums[i], nums[slow]]
            slow++
        }
    }
    console.log(nums);
};
moveZeroes1(nums);

export { }
