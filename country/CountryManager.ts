import {Country} from "./Country";
export class CountryManager{
    list:Country[]=[]
    add(...data:Country[]){
        return this.list.push(...data)
    }
    countrySort(){
        for (let i = 0; i < this.list.length; i++) {
            for (let j = 0; j < this.list.length-i-1; j++) {
                if (this.list[j].gold<this.list[j+1].gold){
                    let temp = this.list[j]
                    this.list[j] =this.list[j+1]
                    this.list[j+1]=temp
                }else if (this.list[j].gold==this.list[j+1].gold){
                    if (this.list[j].silver<this.list[j+1].silver){
                        let temp = this.list[j]
                        this.list[j] =this.list[j+1]
                        this.list[j+1]=temp
                    }else if (this.list[j].silver==this.list[j+1].silver){
                        if (this.list[j].bronze<this.list[j+1].bronze){
                            let temp = this.list[j]
                            this.list[j] =this.list[j+1]
                            this.list[j+1]=temp
                        } else if (this.list[j].bronze==this.list[j+1].bronze){
                            if (this.list[j].name.localeCompare(this.list[j+1].name)>0){
                                let temp = this.list[j]
                                this.list[j] =this.list[j+1]
                                this.list[j+1]=temp
                            }
                        }
                    }
                }0
            }
        }
        return this.list
    }
}