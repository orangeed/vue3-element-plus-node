/**
 * 实现 strStr() 函数。
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
说明：
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
示例 1：
输入：haystack = "hello", needle = "ll"
输出：2
示例 2：
输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：
输入：haystack = "", needle = ""
输出：0
 */

/**
 * 直接调用indexOf
 * @param haystack 
 * @param needle 
 * @returns 
 */
const strStr = (haystack: string, needle: string): number => {
    return haystack.indexOf(needle)
};

/**
 * 滑动窗口
 * @param haystack 
 * @param needle 
 * @returns 
 */
const strStr1 = (haystack: string, needle: string): number => {
    let hl: number = haystack.length, nl: number = needle.length
    if (hl === 0 && nl === 0) return 0
    for (let i = 0; i < hl; i++) {
        // substr 不建议使用，推荐使用substring
        // substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
        if (haystack.substring(i, i + nl) === needle) return i
    }
    return -1
};

const haystack: string = "hello", needle: string = "ll"

// console.log(strStr(haystack, needle));
console.log(strStr1(haystack, needle));
