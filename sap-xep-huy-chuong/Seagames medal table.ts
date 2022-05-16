import {Country} from "./country";

export class SeaGamesMedalTable {
    table: Country[] = []
    switch: boolean

    constructor() {
        this.switch = false
    }

    insertCountry(...country) {
        this.table.push(...country)
    }

    deleteCountry(name: string) {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i].name == name) {
                this.table.splice(i, 1)
            }
        }
    }

    swap(a,b){
        let temp = this.table[a]
        this.table[a] = this.table[b]
        this.table[b]= temp
    }
    analyzeIf(country1:Country,country2:Country){
        if(country1.gold<country2.gold){
            this.switch = true
        }else if(country1.gold===country2.gold){
            if(country1.silver<country2.silver){
                this.switch = true
            }else if(country1.silver ===country2.silver){
                if(country1.bronze<country2.bronze){
                    this.switch = true
                }
            }
        }
        return this.switch
    }
    bubbleSort(){
        for (let i = 0; i < this.table.length; i++) {
            for (let j = this.table.length-1; j >i ; j--) {
                if(this.analyzeIf(this.table[j-1],this.table[j])){
                    this.swap(j-1,j)
                    this.switch=false
                }
            }
        }
    }
}