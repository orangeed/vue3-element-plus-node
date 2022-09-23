const maxSubArray = (nums: number[]): number => {
    // let dp = Array(nums.length); //状态定义为以i结尾的最大子数组和
    // dp[0] = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     console.log('dp', dp);
    //     //下面是状态转移方程
    //     if (dp[i - 1] > 0) { //如果前面累积起来大于0
    //         dp[i] = dp[i - 1] + nums[i];  //前面的积蓄是正的资产是有意义的，就加起来，最后结果会更大
    //     } else {  //前面的积蓄是负债，就不要，自立门户从自己开始
    //         dp[i] = nums[i];
    //     }
    // }
    // return Math.max(...dp);
    if (!nums.length) {
        return;
    };
    // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
    let max_ending_here = nums[0];
    let max_so_far = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,
        console.log(max_ending_here, max_so_far);

        max_ending_here = Math.max(nums[i], max_ending_here + nums[i]);
        max_so_far = Math.max(max_so_far, max_ending_here);
    };

    return max_so_far;
};

const nums: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log('maxSubArray', maxSubArray(nums));

export { }