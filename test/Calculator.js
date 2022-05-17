var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.add = function () {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number');
        }
        else {
            return this.a + this.b;
        }
    };
    Calculator.prototype.sub = function (a, b) {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number');
        }
        else {
            return this.a - this.b;
        }
    };
    Calculator.prototype.division = function () {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number');
        }
        else {
            if (this.b != 0) {
                return this.a / this.b;
            }
            else {
                throw new Error('b cannot divide by zero');
            }
        }
    };
    Calculator.prototype.multiply = function () {
        if (isNaN(this.a && this.b)) {
            throw Error('a and b must be number');
        }
        else {
            return this.a * this.b;
        }
    };
    return Calculator;
}());
var calculator = new Calculator(3, 'a');
try {
    console.log(calculator.division());
}
catch (e) {
    console.log(e.message);
}
