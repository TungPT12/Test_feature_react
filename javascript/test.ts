class Person {
    _name: string;
    _age: number;

    constructor (_name: string, _age: number) {
        this._name = _name;
        this._age = _age;
    }

    public get age() {
        return this._age;
    }
    public set age(theAge) {
        this._age = theAge;
    }
}

let person = new Person('tun',222);
console.log(person._age);
person._age = 20;
console.log(person._age)