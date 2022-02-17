/**最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */

const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 0) return ''
    let slow: number = 0, ans: string = strs[slow]
    for (let i = 0; i < strs.length; i++) {
        let j: number = 0
        for (; j < ans.length && j < strs[i].length; j++) {
            console.log(ans[j], strs[i][j]);
            if (ans[j] !== strs[i][j]) break;
        }
        ans = ans.substring(0, j);
        if (ans === "") return ans
    }
    return ans
};

// const strs: string[] = ["flower", "flow", "flight"]
const strs: string[] = ["dog","racecar","car"]


console.log(longestCommonPrefix(strs));
export {}