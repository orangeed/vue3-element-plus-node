/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 示例：
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 * 提示：
 * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格
 */
/**
 * 先将字符串通过空格化为数组，然后遍历数组，将数组中的每一个字符串给互换位置，然后拼接起来
 * @param s 
 * @returns 
 */
const reverseWords = (s: string): string => {
    // 如果字符串没有直接返回空字符串
    if (s === '') return ''
    // 分割为数组
    let arr = s.split(' ')
    // 定义一个需要返回的字符串
    let str: string = ''
    // 遍历数组
    for (let index = 0; index < arr.length; index++) {
        // 分割数组中每一个字符串为数组
        let ele = arr[index].split('')
        // 定义左边的指针
        let left: number = 0
        // 定义右边的指针
        let right: number = ele.length - 1
        // 当左边的指针小于右边的指针的时候执行
        while (left < right) {
            // 互换位置
            [ele[right], ele[left]] = [ele[left], ele[right]]
            // 左边的值向右移动一位
            left++
            // 右边的值向左移动一位
            right--
        }
        // 定义一个缓存
        let cache: string = ''
        // 如果不是最后一个的话，拼接字符串后面加一个空格，是的话不加空格
        index !== arr.length - 1 ? cache += ele.join('') + ' ' : cache += ele.join('')
        // 将缓存的字符串拼接到一起
        str += cache
    }
    // 返回拼接好的字符串
    return str
};

const s: string = "Let's take LeetCode contest"
// reverseWords(s)
console.log(reverseWords(s));
export { }