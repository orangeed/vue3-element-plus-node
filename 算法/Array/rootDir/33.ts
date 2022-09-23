const numberOfSteps = (num: number): number => {
    let count:number = 0
    while (num) {
        num % 2 === 0 ? num = num / 2 : num -= 1
        count++
    }
    return count
};

const num = 14
console.log(numberOfSteps(num));