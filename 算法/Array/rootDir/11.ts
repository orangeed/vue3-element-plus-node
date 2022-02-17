/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 示例 1：
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 示例 2：
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 */

/**
 * 反转字符串，设置两个指针，一个开始，一个结束，当数组的长度为0的时候，返回空数组，不为0的额时候，当开始的指针小于结束的指针时候，开始遍历，交换两侧的数组值。
 * 注：之所以要length-1 是因为，数组的索引值是从0开始的，而length长度是从1开始计算的，长度减1就是索引值了。不减去1的话，数组的索引值长度大于实际长度，数组最后一个将是undefined
 * @param s 
 * @returns 
 */
const reverseString = (s: string[]): string[] => {
    let start: number = 0, end: number = s.length - 1
    if (s.length === 0) return []
    while (start < end) {
        // const temp = s[start]
        // s[start] = s[end]
        // s[end] = temp
        // start++
        // end--
        [s[end], s[start]] = [s[start], s[end]]
        start++
        end--
    }
    return s
}

const s: string[] = ["h", "e", "l", "l", "o"]
console.log(reverseString(s));

export { }