"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaGamesMedalTable = void 0;
var SeaGamesMedalTable = /** @class */ (function () {
    function SeaGamesMedalTable() {
        this.table = [];
        this.switch = false;
    }
    SeaGamesMedalTable.prototype.insertCountry = function () {
        var _a;
        var country = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            country[_i] = arguments[_i];
        }
        (_a = this.table).push.apply(_a, country);
    };
    SeaGamesMedalTable.prototype.deleteCountry = function (name) {
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i].name == name) {
                this.table.splice(i, 1);
            }
        }
    };
    SeaGamesMedalTable.prototype.swap = function (a, b) {
        var temp = this.table[a];
        this.table[a] = this.table[b];
        this.table[b] = temp;
    };
    SeaGamesMedalTable.prototype.analyzeSort = function (country1, country2) {
        if (country1.gold < country2.gold) {
            this.switch = true;
        }
        else if (country1.gold === country2.gold) {
            if (country1.silver < country2.silver) {
                this.switch = true;
            }
            else if (country1.silver === country2.silver) {
                if (country1.bronze < country2.bronze) {
                    this.switch = true;
                }
            }
        }
        return this.switch;
    };
    SeaGamesMedalTable.prototype.bubbleSort = function () {
        for (var i = 1; i < this.table.length; i++) {
            for (var j = this.table.length - 1; j > i; j--) {
                if (this.analyzeSort(this.table[j - 1], this.table[j])) {
                    this.swap(j - 1, j);
                    this.switch = false;
                }
            }
        }
    };
    SeaGamesMedalTable.prototype.listSort = function () {
        for (var i = 0; i < this.table.length - 1; i++) {
            for (var j = i + 1; j < this.table.length; j++) {
                if (this.table[j].gold > this.table[i].gold) {
                    this.swap(i, j);
                }
                else if (this.table[j].gold == this.table[i].gold) {
                    if (this.table[j].silver > this.table[i].silver) {
                        this.swap(i, j);
                    }
                    else if (this.table[j].silver == this.table[i].silver) {
                        if (this.table[j].bronze > this.table[i].bronze) {
                            this.swap(i, j);
                        }
                    }
                }
            }
        }
        return this.table;
    };
    return SeaGamesMedalTable;
}());
exports.SeaGamesMedalTable = SeaGamesMedalTable;
