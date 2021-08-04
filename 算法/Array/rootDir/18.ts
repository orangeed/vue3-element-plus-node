/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 * 示例 2：
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 * 示例 3：
 * 输入：matrix = [[1]]
 * 输出：[[1]]
 * 示例 4：
 * 输入：matrix = [[1,2],[3,4]]
 * 输出：[[3,1],[4,2]]
 */
/**
 * 通过使用新的数组
 * @param matrix 
 * @returns 
 */
const rotate = (matrix: number[][]): void => {
    // 浅拷贝传过来的数组
    let matrixNew: number[][] = JSON.parse(JSON.stringify(matrix))
    // 定义数组的长度
    const l: number = matrix.length
    // 遍历二维数组
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            // 原数组中，第一排第一个旋转后在第一列第一个，第一排第二个在第一列第二排，以此类推。
            // 也就是说matrix[row][col] = matrixNew[col][l-row-1]
            matrixNew[j][l - i - 1] = matrix[i][j]
        }
    }
    // 将旋转后的数组赋值给传过来的数组
    return matrix = JSON.parse(JSON.stringify(matrixNew))
};

const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// rotate(matrix)
console.log(rotate(matrix));

/**
 * 水平上下翻转，然后对角线翻转
 * @param matrix 
 * @returns 
 */
const rotate1 = (matrix: number[][]): void => {
    const l: number = matrix.length
    // 因为是上下翻转，所以只需要遍历所有行的一半
    for (let i = 0; i < Math.floor(l / 2); i++) {
        for (let j = 0; j < l; j++) {
            // matrix[l - i - 1][j] = matrix[i][j]
            // 上下翻转对调，也就是第一列第一个和第一列最后一个对调，同样第一列第二个和第一列倒数第二个，以此类推
            [matrix[i][j], matrix[l - i - 1][j]] = [matrix[l - i - 1][j], matrix[i][j]]
        }
    }
    console.log('1', matrix);
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < i; j++) {
            // 对角线翻转，交换位置
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    console.log('2', matrix);
    // return matrix
}

console.log(rotate1(matrix));
export { }