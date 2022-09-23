var numberOfSteps = function (num) {
    var count = 0;
    while (num) {
        num % 2 === 0 ? num = num / 2 : num -= 1;
        // if (num % 2 === 0) {
        //     num = num / 2
        // } else {
        //     num = num-1;
        // }
        count++;
    }
    return count;
};
var num = 14;
console.log(numberOfSteps(num));
