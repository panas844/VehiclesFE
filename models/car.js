"use strict";
// START CAR
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this._wheels = new Array();
        this._plate = plate;
        this._color = color;
        this._brand = brand;
    }
    Object.defineProperty(Car.prototype, "plate", {
        get: function () {
            return this._plate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "wheels", {
        get: function () {
            return this._wheels;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.addWheel = function (wheel) {
        this._wheels.push(wheel);
    };
    return Car;
}());
