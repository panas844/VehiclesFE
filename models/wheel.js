"use strict";
var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this._diameter = diameter;
        this._brand = brand;
    }
    Object.defineProperty(Wheel.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wheel.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    return Wheel;
}());
