"use strict";

class Garden {
    constructor () {
        this.countApples = 0;
        this.countAllGrowApple = 0;
        this.trees = [];
        this.quantity = Math.floor(Math.random()*(30-1)+1);
        for (let i = 0; i < this.quantity; i ++) {
            this.trees[i] = new Tree();
        }
        this.age = 1;
        this.day = 1;
    }

    getCountApples(){
        for (let i=0; i<this.trees.length; i++) {
            this.countApples +=this.trees[i].apples.length;
        }
        return console.log(this.countApples);
    }

    passDay() {
        for (let i=0; i<this.trees.length; i++) {
            this.trees[i].one_day_passed();
            this.countApples += this.trees[i].apples.length;
            this.countAllGrowApple+=this.trees[i].countGrowApple;
        }

        if (this.age !==31){
            console.log("день - "+this.day+" (Всего яблок на "+this.quantity+" деревьях - " +this.countApples+")");}
            else{
            console.log("день - "+this.day+" (Всего яблок на "+this.quantity+" деревьях - " +this.countApples+" , "+ "выросло - "+this.countAllGrowApple+" яблок)");
            this.age =1;
             }
        this.age += 1;
        this.countApples = 0;
        this.countAllGrowApple = 0;
        return this.day += 1;

    }


}
