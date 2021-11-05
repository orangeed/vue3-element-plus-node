/**
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 * 注意：
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 示例 1：
 * 输入：board = 
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * 输出：true
 * 示例 2：
 * 输入：board = 
 * [["8","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * 输出：false
 * 解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
 */

const isValidSudoku = (board: string[][]): boolean => {
    // 定义行，列，宫格
    let rows: string[][] = [], columns: string[][] = [], boxs: string[][] = []
    // 二维数组，因为每一行的数据去掉.后，依然是一个二维数组，同理列和宫格一样
    for (let i = 0; i < 9; i++) {
        rows[i] = []
        columns[i] = []
        boxs[i] = []
    }
    // 循环一层数组
    for (let i = 0; i < board.length; i++) {
        // 循环二层数组
        for (let j = 0; j < board[i].length; j++) {
            // 获取每一个值
            const item = board[i][j];
            // 去掉.剩下的正确数值
            if (item !== '.') {
                // 判断行中是否有这个值，没有的话，将它放在行中，有的话返回false
                if (!rows[i].includes(item)) {
                    rows[i].push(item)
                } else {
                    return false
                }
                // 判断列中是否有这个值，没有的话，将它放在列中，有的话返回false
                if (!columns[j].includes(item)) {
                    columns[j].push(item)
                } else {
                    return false
                }
                // 设置宫格的索引值，
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (!boxs[boxIndex].includes(item)) {
                    boxs[boxIndex].push(item)
                } else {
                    return false
                }
            }
        }
    }
    return true
};

const board: string[][] = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(isValidSudoku(board));
export{}

