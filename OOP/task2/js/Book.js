"use strict";
class Book {
    constructor(name,author){
        this._name = name;
        this._author = author;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }
}