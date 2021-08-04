"use strict";
var isValidSudoku = function (board) {
    var rows = [], columns = [], boxs = [];
    for (var i = 0; i < 9; i++) {
        rows[i] = [];
        columns[i] = [];
        boxs[i] = [];
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var item = board[i][j];
            if (item !== '.') {
                if (!rows[i].includes(item)) {
                    rows[i].push(item);
                }
                else {
                    return false;
                }
                if (!columns[j].includes(item)) {
                    columns[j].push(item);
                }
                else {
                    return false;
                }
                var boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (!boxs[boxIndex].includes(item)) {
                    boxs[boxIndex].push(item);
                }
                else {
                    return false;
                }
            }
        }
    }
    return true;
};
var board = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(board));
