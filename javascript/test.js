var Person = /** @class */ (function () {
    function Person(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person('tun', 222);
console.log(person._age);
person._age = 20;
console.log(person._age);
