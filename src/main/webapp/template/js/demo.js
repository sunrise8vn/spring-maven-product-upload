class Phone {
    constructor(name, price, factory, releaseDate) {
        this._name = name;
        this._price = price;
        this._factory = factory;
        this._releaseDate = releaseDate;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get factory() {
        return this._factory;
    }

    set factory(value) {
        this._factory = value;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    set releaseDate(value) {
        this._releaseDate = value;
    }
}