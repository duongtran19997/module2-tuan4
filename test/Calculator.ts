class Calculator {
    a: number
    b: number

    constructor(a, b) {
        this.a = a
        this.b = b
    }

    add() {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number')
        } else {
            return this.a + this.b
        }
    }

    sub(a, b) {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number')
        } else {
            return this.a - this.b
        }
    }

    division() {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number')
        } else {
            if (this.b != 0) {
                return this.a / this.b
            } else {
                throw new Error('b cannot divide by zero')
            }
        }
    }

    multiply() {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number')
        } else {
            return this.a * this.b
        }
    }

}

let calculator = new Calculator(3, 'a')
try {
    console.log(calculator.division());
} catch (e) {
    console.log(e.message);
}
