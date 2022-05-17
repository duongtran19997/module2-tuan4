var CLassName = /** @class */ (function () {
    function CLassName() {
        this.NAME_REGEX = /^[CAP]\d{4}[GHIKLM]$/g;
    }
    CLassName.prototype.validate = function (regex) {
        return this.NAME_REGEX.test(regex);
    };
    return CLassName;
}());
var className = new CLassName();
var trueName = ["C0318G"];
var failName = ['C0318G', 'P0323A'];
for (var _i = 0, failName_1 = failName; _i < failName_1.length; _i++) {
    var nameClass = failName_1[_i];
    var invalid = className.validate(nameClass);
    console.log(nameClass + 'is' + invalid);
}
