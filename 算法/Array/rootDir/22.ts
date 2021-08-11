/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 解释："amanaplanacanalpanama" 是回文串
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 * 解释："raceacar" 不是回文串
 */

const isPalindrome = (s: string): boolean => {
    const reg: RegExp = /[a-z0-9]+/g
    const _s: RegExpMatchArray = s.toLocaleLowerCase().match(reg)
    if (!_s) return true
    let _str = _s.join('')
    // let _sp: string[] = _str.split(''), left: number = 0, right: number = _sp.length - 1
    let left: number = 0, right: number = _str.length - 1

    while (left < right) {
        if (_str[left] !== _str[right]) return false
        left++
        right--
    }
    return true
};


const s: string = 'A man, a plan, a canal: Panama'
// const s: string = 'race a car'
// const s: string = ''
console.log(isPalindrome(s));

export { }