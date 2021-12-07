"use strict";
var randomColor = (function () {
    function randomColor(length) {
        this.length = length;
        this.hslArray = this.getHslArray();
    }
    randomColor.prototype.randomHsl = function () {
        var H = Math.random();
        var S = Math.random();
        var L = Math.random();
        return [H, S, L];
    };
    randomColor.prototype.getHslArray = function () {
        var HSL = [[]];
        var hslLength = this.length;
        for (var i = 0; i < hslLength; i++) {
            var ret = this.randomHsl();
            if (i > 0 && Math.abs(ret[0] - HSL[i - 1][0]) < 0.25) {
                i--;
                continue;
            }
            ret[1] = 0.7 + (ret[1] * 0.2);
            ret[2] = 0.4 + (ret[2] * 0.4);
            ret = ret.map(function (item) {
                return parseFloat(item.toFixed(2));
            });
            HSL.push(ret);
        }
        return HSL;
    };
    randomColor.prototype.hslToRgb = function (H, S, L) {
        var R, G, B;
        if (+S === 0) {
            R = G = B = L;
        }
        else {
            var hue2Rgb = function (p, q, t) {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
            var P = 2 * L - Q;
            R = hue2Rgb(P, Q, H + 1 / 3);
            G = hue2Rgb(P, Q, H);
            B = hue2Rgb(P, Q, H - 1 / 3);
        }
        return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
    };
    Object.defineProperty(randomColor.prototype, "rgbArray", {
        get: function () {
            var _this = this;
            console.log('hslArray', this.hslArray);
            if (!this.hslArray.length)
                return [];
            var rgbArray1 = this.hslArray.map(function (v) {
                return _this.hslToRgb.apply(_this, v);
            });
            return rgbArray1.map(function (v) {
                return {
                    color: "rgb(" + v.toString() + ")"
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    return randomColor;
}());
console.log('randomColor', new randomColor(8).rgbArray);
