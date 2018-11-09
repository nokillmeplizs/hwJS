// Каждые 30 суток на каждом дереве рождается новое яблок.
//     Все яблоки каждые сутки стареют на 1 день.
//     Яблоки падают с дерева при возрасте 30 дней.
//     Можно усложнить - 50% яблок могут упасть через 28 или через 32 дня по случайному выбору.
//     Яблоки портятся, после падения через сутки
"use strict";
class Tree {
    constructor() {
        this.age = 1;
        this.apples = [];
        this.quantity = Math.floor(Math.random() * (30 - 1) + 1);
        for (let i = 0; i < this.quantity; i++) {
            this.apples[i] = new Apple();
        }
        this.allapples = 0;
    }

    one_day_passed() {
        for (let i = 0; i < this.apples.length; i++) {
            this.apples[i].hasAged();
            if (this.apples[i].spoiled === 1) {
                this.apples.splice(i, 1);
            }
            if (this.apples[i].fall === 1) {
                this.apples[i].spoil()
            }

            if (this.apples[i].age === (Math.floor(Math.random() * (60 - 30) + 30))) {
                this.apples[i].fell()
            }
            if (this.apples[i].age === 60) {
                this.apples[i].fell()
            }
        }
        console.log("Всего на деревео " + this.apples.length + " яблок");
        this.age += 1;
        this.day += 1;
        this.newApple();
    }

    newApple() {
        if (this.age === 30) {
            this.quantity = Math.floor(Math.random() * (30 - 1) + 1);
            for (let i = 0; i < this.quantity; i++) {
                this.apples.push(new Apple());

            }
            console.log("Выросло" + this.quantity + " яблок");
            this.age = 0;
        }
    }

}