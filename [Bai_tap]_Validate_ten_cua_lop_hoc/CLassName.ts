class CLassName {
    private NAME_REGEX: RegExp = /^[CAP]\d{4}[GHIKLM]$/g
    public validate(regex:string){
        return this.NAME_REGEX.test(regex)
    }
}

let className = new CLassName()
let trueName: string[] = ["C0318G"];
let failName:string[] =['C0318G', 'P0323A']

for (const nameClass of failName) {
    let invalid = className.validate(nameClass)
    console.log(nameClass+'is'+invalid)
}