"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rotate = function (matrix) {
    var matrixNew = JSON.parse(JSON.stringify(matrix));
    var l = matrix.length;
    for (var i = 0; i < l; i++) {
        for (var j = 0; j < l; j++) {
            matrixNew[j][l - i - 1] = matrix[i][j];
        }
    }
    return matrix = JSON.parse(JSON.stringify(matrixNew));
};
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotate(matrix));
var rotate1 = function (matrix) {
    var _a, _b;
    var l = matrix.length;
    for (var i = 0; i < Math.floor(l / 2); i++) {
        for (var j = 0; j < l; j++) {
            _a = __read([matrix[l - i - 1][j], matrix[i][j]], 2), matrix[i][j] = _a[0], matrix[l - i - 1][j] = _a[1];
        }
    }
    console.log('1', matrix);
    for (var i = 0; i < l; i++) {
        for (var j = 0; j < i; j++) {
            _b = __read([matrix[j][i], matrix[i][j]], 2), matrix[i][j] = _b[0], matrix[j][i] = _b[1];
        }
    }
    console.log('2', matrix);
};
console.log(rotate1(matrix));
