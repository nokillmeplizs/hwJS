"use strict";

let book1 = new Book("Камасутра","Неизвестен");
let book2 = new Book("Камасутра том1","Неизвестен");
let book3 = new Book("Камасутра том2","Неизвестен");
let book4 = new Book("Камасутра том3","Неизвестен");
let book5 = new Book("Камасутра том4","Неизвестен");
let library = new Library();


library.put(book1,3);
library.allbooks();
library.get(book1,1);
library.put(book3,1);
library.allbooks();
library.get(book1,1);
library.get(book1,1);
library.allbooks();

