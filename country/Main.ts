import {Country} from "./Country";
import {CountryManager} from "./CountryManager";
let main = new CountryManager()
let VietNam = new Country(10,5,3,`VietNam`)
let Vn = new Country(10,10,10,`Vn`)
let VN = new Country(12,103,20,`VN`)
let Sing = new Country(5,5,3,`Singgapore`)
let Indo = new Country(6,4,2,`Indonesia`)
main.add(VietNam,Sing,Indo,Vn,VN)
console.log(main.countrySort());
