"use strict";

class Garden {
    constructor () {
        this.trees = [];
        this.quantity = Math.floor(Math.random()*(30-1)+1);
        for (let i = 0; i < this.quantity; i ++) {
            this.trees[i] = new Tree();
        }
        this.age = 1;
        this.day = 1;
    }

    passDay() {
        for (let i=0; i<this.trees.length; i++) {
            this.trees[i].one_day_passed();
        }
        console.log("день - "+this.day);
        return this.age += 1;
    }


}
