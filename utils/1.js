// const a = [1, 2, 3, 4, 5]
// console.time('---');
// if (a.indexOf(1) > -1) {
//     console.log('存在');
// } else {
//     console.log('不存在');
// }
// console.timeEnd('---');

// console.time('---');
// if (~a.indexOf(2)) {
//     console.log('存在', ~a.indexOf(2));
// } else {
//     console.log('不存在', ~a.indexOf(2));
// }
// console.timeEnd('---');
// console.log(~(1.2));

// console.time('---');
// console.log(parseInt(-2.99));
// console.timeEnd('---');
// console.time('---');
// console.log(~~(-2.99));
// console.timeEnd('---');


// // 获取随机HSL
// const randomHsl = () => {
//     var H = Math.random()
//     var S = Math.random()
//     var L = Math.random()
//     return [H, S, L];
// }

// // 获取HSL数组
// const getHslArray = () => {
//     var HSL = [];
//     var hslLength = 16; // 获取数量
//     for (var i = 0; i < hslLength; i++) {
//         var ret = randomHsl();

//         // 颜色相邻颜色差异须大于 0.25
//         if (i > 0 && Math.abs(ret[0] - HSL[i - 1][0]) < 0.25) {
//             i--;
//             continue; // 重新获取随机色
//         }
//         ret[1] = 0.7 + (ret[1] * 0.2); // [0.7 - 0.9] 排除过灰颜色
//         ret[2] = 0.4 + (ret[2] * 0.4); // [0.4 - 0.8] 排除过亮过暗色

//         // 数据转化到小数点后两位
//         ret = ret.map(function (item) {
//             return parseFloat(item.toFixed(2));
//         });

//         HSL.push(ret);
//     }
//     return HSL;
// }
// const hslArray = getHslArray()
// console.log('getHslArray', getHslArray());

// /**
//  * HSL颜色值转换为RGB
//  * H，S，L 设定在 [0, 1] 之间
//  * R，G，B 返回在 [0, 255] 之间
//  * @param H 色相
//  * @param S 饱和度
//  * @param L 亮度
//  * @returns Array RGB色值
//  */
// const hslToRgb = (H, S, L) => {
//     var R, G, B;
//     if (+S === 0) {
//         R = G = B = L; // 饱和度为0 为灰色
//     } else {
//         var hue2Rgb = function (p, q, t) {
//             if (t < 0) t += 1;
//             if (t > 1) t -= 1;
//             if (t < 1 / 6) return p + (q - p) * 6 * t;
//             if (t < 1 / 2) return q;
//             if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//             return p;
//         };
//         var Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
//         var P = 2 * L - Q;
//         R = hue2Rgb(P, Q, H + 1 / 3);
//         G = hue2Rgb(P, Q, H);
//         B = hue2Rgb(P, Q, H - 1 / 3);
//     }
//     return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
// }
// // 合成rgb
// const rgbArray = () => {
//     console.log('hslArray', hslArray);
//     if (!hslArray.length) return []
//     const rgbArray1 = hslArray.map(v => {
//         return hslToRgb.apply(this, v)
//     })
//     return rgbArray1.map(v => {
//         return {
//             color: `rgb(${v.toString()})`
//         }
//     })
// }

// console.log('rgbArray', rgbArray());

// class randomColor {
//     constructor(length) {
//         this.length = length
//         this.hslArray = this.getHslArray()
//     }
//     // 获取随机HSL
//     randomHsl() {
//         var H = Math.random()
//         var S = Math.random()
//         var L = Math.random()
//         return [H, S, L];
//     }

//     // 获取HSL数组
//     getHslArray() {
//         var HSL = [];
//         var hslLength = this.length; // 获取数量
//         for (var i = 0; i < hslLength; i++) {
//             var ret = this.randomHsl();

//             // 颜色相邻颜色差异须大于 0.25
//             if (i > 0 && Math.abs(ret[0] - HSL[i - 1][0]) < 0.25) {
//                 i--;
//                 continue; // 重新获取随机色
//             }
//             ret[1] = 0.7 + (ret[1] * 0.2); // [0.7 - 0.9] 排除过灰颜色
//             ret[2] = 0.4 + (ret[2] * 0.4); // [0.4 - 0.8] 排除过亮过暗色

//             // 数据转化到小数点后两位
//             ret = ret.map(function (item) {
//                 return parseFloat(item.toFixed(2));
//             });

//             HSL.push(ret);
//         }
//         return HSL;
//     }

//     /**
//      * HSL颜色值转换为RGB
//      * H，S，L 设定在 [0, 1] 之间
//      * R，G，B 返回在 [0, 255] 之间
//      * @param H 色相
//      * @param S 饱和度
//      * @param L 亮度
//      * @returns Array RGB色值
//      */
//     hslToRgb(H, S, L) {
//         var R, G, B;
//         if (+S === 0) {
//             R = G = B = L; // 饱和度为0 为灰色
//         } else {
//             var hue2Rgb = function (p, q, t) {
//                 if (t < 0) t += 1;
//                 if (t > 1) t -= 1;
//                 if (t < 1 / 6) return p + (q - p) * 6 * t;
//                 if (t < 1 / 2) return q;
//                 if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//                 return p;
//             };
//             var Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
//             var P = 2 * L - Q;
//             R = hue2Rgb(P, Q, H + 1 / 3);
//             G = hue2Rgb(P, Q, H);
//             B = hue2Rgb(P, Q, H - 1 / 3);
//         }
//         return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
//     }
//     // 合成rgb
//     get rgbArray() {
//         console.log('hslArray', this.hslArray);

//         if (!this.hslArray.length) return []

//         const rgbArray1 = this.hslArray.map(v => {
//             console.log('v', v);
//             return this.hslToRgb.apply(this, v)
//         })
//         return rgbArray1.map(v => {
//             return {
//                 color: `rgb(${v.toString()})`
//             }
//         })
//     }
// }

// console.log('color', new randomColor(10).rgbArray);

// function hexify(color) {
//     var values = color
//         .replace(/rgba?\(/, '')
//         .replace(/\)/, '')
//         .replace(/[\s+]/g, '')
//         .split(',');
//     var a = parseFloat(values[3] || 1),
//         r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
//         g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
//         b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
//     return "#" +
//         ("0" + r.toString(16)).slice(-2) +
//         ("0" + g.toString(16)).slice(-2) +
//         ("0" + b.toString(16)).slice(-2);
// }

// var myHex = hexify('rgba(255, 0, 0, 125)'); // "#f5faf3"

// console.log(myHex);

// const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6]

// const obj = {
//     a: '1',
//     b: '2'
// }

// const {
//     a,
//     b
// } = obj
// console.log(a, b);

// const c = {
//     c: '3',
//     ...obj
// }

// console.log(c);

// console.log(arr);
// console.log(...arr);
// console.log(...new Set(arr));
// console.log(Math.max(...arr));

// class EventBus {
//     constructor() {
//         this.eventContainer = this.eventContainer || new Map() //用一个容器存放事件
//     }
//     on(type, callback) {
//         if (!this.eventContainer.has(type)) {
//             //如果容器里面没有这种类型的事件，就增加
//             this.eventContainer.set(type, callback)

//         }
//     }
//     off(type) {
//         if (this.eventContainer.has(type)) {

//             this.eventContainer.delete(type)

//         }
//     }
//     emit(type) {
//         let fn = this.eventContainer.get(type)
//         fn.apply(this, [...arguments].slice(1))
//     }
// }


class EventBus {
    constructor() {
        // 创建事件队列，因为可能会存在很多的eventbus，所以使用对象的形式，键为名，值为函数。
        this.tasks = {}
    }
    /**
     * 订阅事件
     * @param {String} type 事件名称
     * @param {Function} fn 回调函数
     */
    on(type, fn) {
        // 如果事件队列中不包含传入的type类型，则需要创建一个。
        if (!this.tasks[type]) {
            this.tasks[type] = []
        }
        // 如果事件队列中存在，则将回调函数加入队列
        this.tasks[type].push(fn)
    }
    /**
     * 订阅一次的事件
     * @param {String} type 
     * @param {Function} fn 
     */
    once(type, fn) {
        // 如果事件队列中不包含传入的type类型，则需要创建一个。
        if (!this.tasks[type]) {
            this.tasks[type] = []
        }
        const _this = this
        // 只执行一次，然后注销移除回调
        const _once = (...args) => {
            fn(...args)
            _this.off(type, _once)
        }
        this.tasks[type].push(_once)
    }
    /**
     * 发布事件
     * @param {String} type 事件
     * @param  {...any} args 传入的参数
     * @returns 
     */
    emit(type, ...args) {
        console.log('args', args);
        // 如果队列中不存在传入的type时候，则不执行任何操作
        if (!this.tasks[type]) {
            return
        }
        // 如果队列中含有传入的type时，遍历队列中的函数，并传入参数
        this.tasks[type].forEach(fn => fn(...args));
    }
    /**
     * 取消订阅
     * @param {String} type 事件名称
     * @param {Function} fn 回调函数
     * @returns 
     */
    off(type, fn) {
        const tasks = this.tasks[type]
        console.log('tasks', this.tasks[type]);
        // 如果队列中不存在传入的type时候，则不执行任何操作
        if (!Array.isArray(tasks)) {
            return
        }
        // 利用 filter 删除队列中的指定函数
        this.tasks[type] = tasks.filter(cb => fn !== cb)
        console.log('off', this.tasks[type]);
    }
}

let eventBus = new EventBus()
eventBus.on('testEvent', data => {
    setTimeout(() => {
        console.log('This is a', data.name)
    }, 1000)
})
eventBus.emit('testEvent', {
    name: 'orange'
})

setTimeout(() => {
    eventBus.off('testEvent', (e) => {
        console.log('事件已经移除', e);
    })
}, 3000);