// put(book, quantity) и get( book, quantity).
"use strict";
class Library{

    constructor (){

        this.kol =0;
        this._books = [];
    }
    get kol() {
        return this.limit;
    }

    set kol(value) {
        this.limit = value;
    }

    get books() {
        return this._books;
    }

    set books(value) {
        this._books = value;
    }
    put(book, quantity){
    if((this.kol + quantity) >10){
        console.log("В библиотеке нет свободного места для хранения киниг");
        return;
    }
        for (var i = 0; i < this.books.length; i++) {
           if(book.name === this.books[i]._name) {
               book.quantity += quantity;
               this.kol = this.kol+quantity;
               console.log("Количество книг с названием -  "+book.name+", автор - "+book.author+" увеличилось на  "+quantity+" штук");
               return
           }
           }

        this.kol = this.kol+quantity;
        book.quantity = quantity;
        this.books.push(book);
        return console.log("В библиотеку добавлена книга с названием "+book.name+", автор - "+book.author+" в количестве "+quantity+" штук");

    }
    get(book, quantity){
    if(this.kol===0){
        console.log("В библиотеке нет книг");
    }
        for (var i = 0; i < this.books.length; i++) {
            if (book.name !== this.books[i]._name) {
                console.log("В библиотеке нет такой книги");
            }
            else if (book.name === this.books[i]._name) {
                book.quantity -= quantity;
                this.kol = this.kol - quantity;
                if(book.quantity ===0){
                   this.books.splice(i,1);
                    console.log("Из библиотеке забрали  -  " + book.name + ", автор - " + book.author + " " + quantity + " штук, больше таких книг нет");
                    return
                }
                console.log("Из библиотеке забрали  -  " + book.name + ", автор - " + book.author + " " + quantity + " штук, осталось "+book.quantity);
                return
            }
        }
    }

    allbooks (){
        if(this.limit===0){
            console.log("В библиотеке нет книг:");
            return;
        }
        console.log("Всего в библиотеке "+this.limit+" книг :");
        for (var i = 0; i < this.books.length; i++) {
            console.log((i+1)+" "+this.books[i].name+" "+this.books[i].quantity+" штук");
        }
    }
}



