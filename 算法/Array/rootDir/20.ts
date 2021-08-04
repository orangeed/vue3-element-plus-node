/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 示例：
 * s = "leetcode"
 * 返回 0
 * s = "loveleetcode"
 * 返回 2
 */

interface obj {
    [propname: string]: number,
}

const firstUniqChar = (s: string): number => {
    let map: obj = {};
    for (let v of s) {
        map[v] = (map[v] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i
        }
    };
    return -1;
};

const s: string = "loveleetcode"
// firstUniqChar(s)
console.log(firstUniqChar(s));