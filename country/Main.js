"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Country_1 = require("./Country");
var CountryManager_1 = require("./CountryManager");
var main = new CountryManager_1.CountryManager();
var VietNam = new Country_1.Country(10, 5, 3, "VietNam");
var Vn = new Country_1.Country(10, 10, 10, "Vn");
var VN = new Country_1.Country(12, 103, 20, "VN");
var Sing = new Country_1.Country(5, 5, 3, "Singgapore");
var Indo = new Country_1.Country(6, 4, 2, "Indonesia");
main.add(VietNam, Sing, Indo, Vn, VN);
console.log(main.countrySort());
