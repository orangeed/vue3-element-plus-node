"use strict";
var longestCommonPrefix = function (strs) {
    if (strs.length === 0)
        return '';
    var slow = 0, ans = strs[slow];
    for (var i = 0; i < strs.length; i++) {
        var j = 0;
        for (; j < ans.length && j < strs[i].length; j++) {
            console.log(ans[j], strs[i][j]);
            if (ans[j] !== strs[i][j])
                break;
        }
        ans = ans.substring(0, j);
        if (ans === "")
            return ans;
    }
    return ans;
};
var strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
