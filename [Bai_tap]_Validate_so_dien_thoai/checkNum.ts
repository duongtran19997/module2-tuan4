class CheckNumber {
    private NAME_REGEX: RegExp = /^\(\d{2}\)-\(\d{10}\)$/g
    public validate(regex:string){
        return this.NAME_REGEX.test(regex)
    }
}

let checkNumber = new CheckNumber()
let trueNum: string[] = ["(84)-(0978489648)"];
let failNum:string[] =['(a8)-(22222222)', '(84)-(097848964)']

for (const nameClass of failNum) {
    let invalid = checkNumber.validate(nameClass)
    console.log(nameClass+'is'+invalid)
}