import {Country} from "./country";
import {SeaGamesMedalTable} from "./Seagames medal table";

let Vietnam = new Country('Việt Nam',70,46,44)
let Thailand = new Country('Thái lan',27,24,44)
let Indonesia = new Country('Indonesia',19,30,24)
let Philippines =  new Country('Philippines',21,27,38)
let Philippines2 =  new Country('Philippines2',21,27,3)
let Philippines3 =  new Country('Philippines3',21,30,37)

let MedalTable =  new SeaGamesMedalTable()
MedalTable.insertCountry(Thailand,Philippines,Indonesia,Vietnam,Philippines2,Philippines3)
MedalTable.listSort()
console.log(MedalTable);

