// Яблоки должны иметь определяться:
//     -возрастом
//     -цветом
//     -размером
//     -флаг испорченности (0 - свежее, 1 - испорченное)
// -флаг упавшего с дерева (0 - на дереве, 1 - упало)
//
// Яблоки имею методы:
//     -упасть с дерева
// -испортиться
"use strict";
class Apple {
    constructor(){
        this._age =  Math.floor(Math.random()*(30-1)+1);
        this.color = Math.round(Math.random())?"Красное":"Зеленое";
        this.size = Math.floor(Math.random()*(4-1)+1);
        this.spoiled = 0;
        this.fall = 0;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
    fell(){
        return this.fall = 1;
    }
    spoil(){
        return this.spoiled =1;
    }
    hasAged(){
        return this._age +=1;
    }
}
