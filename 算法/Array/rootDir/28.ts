/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
示例 1：
输入：s = "()"
输出：true
示例 2：
输入：s = "()[]{}"
输出：true
示例 3：
输入：s = "(]"
输出：false
示例 4：
输入：s = "([)]"
输出：false
示例 5：
输入：s = "{[]}"
输出：true
 */
const isValid = (s: string): boolean => {
    // 如果传入的字符串不是双数，返回false
    if (s.length % 2 !== 0) return false
    // 定义一个map对象，前面为键，后面为值，例如，")"是键，后面的"("是值
    const pairs = new Map([[')', '('], [']', '['], ['}', '{']])
    console.log('pairs', pairs);
    // 定义一个数组，用来模拟出栈和入栈
    const stk: string[] = []
    // 循环传入的字符串
    for (const item of s) {
        console.log('item', item)
        console.log('has', pairs.has(item));
        console.log('get', pairs.get(item));
        console.log('开始stk', stk);
        // 如果在map对象中找到了在这个键
        if (pairs.has(item)) {
            // 当数组有长度，或者数组最后一个和map对象中的字符不是一样的话，返回false
            if (!stk.length || stk[stk.length - 1] !== pairs.get(item)) {
                return false
            }
            // 反之，数组有长度，并且有相同的字符，则删除最后一个，这就是出栈
            stk.pop()
        } else {
            // 如果在map对象中没有找到这个键，就向数组中push数据，这就是入栈
            stk.push(item)
        }
        console.log('获取数据后的stk', stk);
    }
    console.log('最后的stk', stk);
    // 当数组长度为0是的时候，返回true，说明每一个都匹配上了
    return !stk.length
};

const s: string = "()]]"
console.log('结果', isValid(s));

export {}