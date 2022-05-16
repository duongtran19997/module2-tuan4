"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var Country = /** @class */ (function () {
    function Country(gold, silver, bronze, name) {
        this._gold = gold;
        this._silver = silver;
        this._bronze = bronze;
        this._name = name;
    }
    Object.defineProperty(Country.prototype, "gold", {
        get: function () {
            return this._gold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "silver", {
        get: function () {
            return this._silver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "bronze", {
        get: function () {
            return this._bronze;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Country;
}());
exports.Country = Country;
