"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryManager = void 0;
var CountryManager = /** @class */ (function () {
    function CountryManager() {
        this.list = [];
    }
    CountryManager.prototype.add = function () {
        var _a;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        return (_a = this.list).push.apply(_a, data);
    };
    CountryManager.prototype.countrySort = function () {
        for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < this.list.length - i - 1; j++) {
                if (this.list[j].gold < this.list[j + 1].gold) {
                    var temp = this.list[j];
                    this.list[j] = this.list[j + 1];
                    this.list[j + 1] = temp;
                }
                else if (this.list[j].gold == this.list[j + 1].gold) {
                    if (this.list[j].silver < this.list[j + 1].silver) {
                        var temp = this.list[j];
                        this.list[j] = this.list[j + 1];
                        this.list[j + 1] = temp;
                    }
                    else if (this.list[j].silver == this.list[j + 1].silver) {
                        if (this.list[j].bronze < this.list[j + 1].bronze) {
                            var temp = this.list[j];
                            this.list[j] = this.list[j + 1];
                            this.list[j + 1] = temp;
                        }
                        else if (this.list[j].bronze == this.list[j + 1].bronze) {
                            if (this.list[j].name.localeCompare(this.list[j + 1].name) > 0) {
                                var temp = this.list[j];
                                this.list[j] = this.list[j + 1];
                                this.list[j + 1] = temp;
                            }
                        }
                    }
                }
                0;
            }
        }
        return this.list;
    };
    return CountryManager;
}());
exports.CountryManager = CountryManager;
