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
      this.table[a]=this.table[b]
      this.table[b] = temp
  }
  analyzeSort(country1:Country,country2:Country){
        if (country1.gold<country2.gold){
            this.switch = true
        }else if(country1.gold===country2.gold){
            if (country1.silver<country2.silver){
                this.switch = true
            }else if (country1.silver===country2.silver){
                if (country1.bronze<country2.bronze){
                    this.switch = true
                }
            }
        }
        return this.switch
  }

  bubbleSort(){
      for (let i = 1; i < this.table.length; i++) {
          for (let j = this.table.length-1; j > i; j--) {
            if(this.analyzeSort(this.table[j-1],this.table[j])){
                this.swap(j-1,j)
                this.switch = false
            }
          }
      }
  }
    listSort() {
        for (let i = 0; i < this.table.length - 1; i++) {
            for (let j = i+1; j < this.table.length; j++) {
                if (this.table[j].gold > this.table[i].gold) {
                    this.swap( i, j);
                }

                else if (this.table[j].gold == this.table[i].gold) {
                    if (this.table[j].silver > this.table[i].silver) {
                        this.swap( i, j);
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
    }
}