'use strict';
function task1() {
    while (true) {
        var height_par = +prompt("Введите высоту прямоугольного параллелепипеда(число)");
        // height_par = parseInt(height_par);
        if (isNaN(height_par)) {
            alert("Введенное значение не является числом. Введите высоту прямоугольного параллелепипеда(число)");
        }
        else {
            break;
        }
    }
    while (true) {
        var length_par = +prompt("Введите длину прямоугольного параллелепипеда(число)");
        // length_par = parseInt(length_par);
        if (isNaN(length_par)) {
            alert("Введенное значение не является числом. Введите длину прямоугольного параллелепипеда(число)");
        }
        else {
            break;
        }
    }
    while (true) {
        var width_par = +prompt("Введите ширину прямоугольного параллелепипеда(число)");
        // width_par = parseInt(width_par);
        if (isNaN(width_par)) {
            alert("Введенное значение не является числом. Введите ширину прямоугольного параллелепипеда(число)");
        }
        else {
            break;
        }
    }
    let S = 2 * (height_par * length_par + length_par * width_par + width_par * height_par);
    if (height_par>width_par){
        console.log("высота больше ширины, высота равна "+height_par);
    }
    if (height_par<width_par){
        console.log("ширина больше высоты, ширина равна "+width_par);
    }
    if (height_par==width_par){
        console.log("высота равна ширине = "+height_par)
    }
    alert("Вы ввели :\n высота " + height_par + "\n длина " + length_par + "\n ширина " + width_par + "\n Площадь прямоугольного параллелепипеда = " + S);
}
function task2() {
var gardenArea = 10; // площадь садового участка в сотках
var oneSotkaArea = 10*10; // площадь 1 сотки
var gradkaArea = 15*25; // площадь грядки в метрах
    gardenArea = gardenArea * oneSotkaArea; // площадь садового участка в метрах
var freeland = gardenArea%gradkaArea;

    console.log("Осталось не занятой земли "+freeland+" м2");
}
function task3() {
   var areaEllipsBigDm2 = 15; //площадь в дц2
   var area1dm2 = 10*10; // площадь 1 дм2 в см2
   var areaEllipsSmall = 600; // площадь в см2 вырезаного эллипса
   areaEllipsBigDm2 = areaEllipsBigDm2 * area1dm2; // площадь в см2 большого эллипса
    var areaRING = areaEllipsBigDm2 - areaEllipsSmall;
   console.log("площадь овального кольца = "+areaRING+" см2");
}
function task4() {
    while (true) {
        var X = prompt("Введите X(число)");
        X = parseInt(X);
        if (isNaN(X)) {
            alert("Введенное значение не является числом.");
        }
        else {
            break;
        }
    }
    while (true) {
        var Y = prompt("Введите Y(число)");
        Y = parseInt(Y);
        if (isNaN(Y)) {
            alert("Введенное значение не является числом.");
        }
        if (X==Y){
            alert("Y не может быть равен X.");
        }
        else{
            break;
        }
    }

    if (Y>X){
        console.log("Преобразование не требуется")
    }
    else{
        X=X+Y;
        Y=X-Y;
        X=X-Y;
    }
    console.log("X равен "+X+" Y равен "+Y);
}

function task5() {
    while (true) {
        var M = prompt("Введите M(число)");
        M = parseFloat(M);
        if (isNaN(M)) {
            alert("Введенное значение не является числом.");
        }
        else {
            break;
        }
    }
    while (true) {
        var N = prompt("Введите N(число)");
        N = parseFloat(N);
        if (isNaN(N)) {
            alert("Введенное значение не является числом.");
        }
        else{
            break;
        }
    }
    if (Math.abs(10-M)>Math.abs(10-N)){
        console.log("Ближайщее число к 10 это  "+N);
    }
    if(Math.abs(10-M)<Math.abs(10-N)){
        console.log("Ближайщее число к 10 это  "+M);
    }
    if (N==M){
        console.log("Значения равны друг другу");
    }


}
function task6() {
    while (true) {
        var IpotecCredit = prompt("Введите размер ипотечного кредита(число)");
        IpotecCredit = parseInt(IpotecCredit);
        if (isNaN(IpotecCredit)) {
            alert("Введенное значение не является числом.");
        }
        else {
            break;
        }
    }
    while (true) {
        var stawka = prompt("Введите размер ипотечной ставки(число)");
        stawka = parseFloat(stawka);
        if (isNaN(stawka)) {
            alert("Введенное значение не является числом.");
        }
        else {
            break;
        }
    }
    while (true) {
        var kolLet = prompt("Введите количество лет, на который берете ипотечный кредит(число)");
        kolLet = parseInt(kolLet);
        if (isNaN(kolLet)) {
            alert("Введенное значение не является числом.");
        }
        else {
            break;
        }
    }
    kolLet = kolLet*12;// кол-во в месяцах
    stawka = (stawka/100)/12; // ставка в месяц

    var annuetetpay = IpotecCredit*((stawka*Math.pow((1+stawka), kolLet))/(Math.pow((1+stawka), kolLet)-1));
    console.log("Ежемесячный платёж = "+parseInt(annuetetpay));
    annuetetpay = annuetetpay*kolLet;
    console.log("Всего вы заплатите - "+parseInt(annuetetpay));
    annuetetpay = annuetetpay - IpotecCredit;
    console.log ("Переплата по кредиту = "+parseInt(annuetetpay));
    console.log ("Вся информация выше - верна для аннуитетного платежа");
}

function task2_1(){
    var X = prompt("Введите координаты вершины Х через пробел");
    X = X.split(' ');
    var Y = prompt("Введите координаты вершины Y через пробел");
    Y = Y.split(' ');
    var Z = prompt("Введите координаты вершины Z через пробел");
    Z = Z.split(' ');

    var x1 = X[0], x2 = X[1]; //кординаты точки X
    var y1 = Y[0], y2 = Y[1]; //Координаты точки Y
    var z1 = Z[0], z2 = Z[1]; // Координаты точки Z

    var a = x1 - y1;
    var b = x2 - y2;
    var c = y1 - z1;
    var d = y2 - z2;
    var e = x1 - z1;
    var f = x2 - z2;

        var XY = Math.sqrt(a * a + b * b); // расстояние между точкой X и Y
        var YZ = Math.sqrt(c * c + d * d); // расстояние между точкой Y и Z
        var XZ = Math.sqrt(e * e + f * f); // расстояние между точкой X и Z
        if(XY == 0 || YZ == 0 || XZ == 0) {
        console.log("это точка");
        }
        if (XY<=YZ && YZ<XZ){
            if (((Math.floor(Math.pow(XY, 2)) + Math.floor(Math.pow(YZ, 2))) === Math.floor(Math.pow(XZ, 2)))){
                console.log("Треугольник прямоугольный");
                } else {
                   console.log("это не прямоугольный треугольник");
                }
            }
        if (XY<=XZ && XZ<YZ){
            if ((Math.floor(Math.pow(XZ, 2)) + Math.floor(Math.pow(XY, 2))) === Math.floor(Math.pow(YZ, 2))){
                console.log("Треугольник прямоугольный");
            } else {
                console.log("это не прямоугольный треугольник");
            }
        }
        if (YZ<=XZ && XZ<XY){
            if ((Math.floor(Math.pow(YZ, 2)) + Math.floor(Math.pow(XZ, 2))) === Math.floor(Math.pow(XY, 2))){
                console.log("Треугольник прямоугольный");
            } else {
                console.log("это не прямоугольный треугольник");
            }
        }
}

function task2_2(){
let month = new Date().getMonth();
if (month == 11 || month == 0 || month == 1){
    console.log("Сейчас Зима");
}
else if (month == 2 ||month ==  3 ||month == 4){
    console.log("Сейчас Весна");
}
else if (month == 5 ||month ==  6 ||month == 7){
    console.log("Сейчас Лето");
}
else{
    console.log("Сейчас Осень");
}

}

function task2_3(){

console.log("вариант2");
var c;
for (var a = 1;a<10;a++){
    c = '';
  for (var b = 1;b<10;b++){
      c+=(a*b<10?' '+a*b:a*b)+' ';
  }
    console.log(c);
}

    // console.log("вариант1");

    // let a = 1;
    // let b = 1;
    // for (;a<11;a++){
    //     for (;b<11;b++){
    //         console.log(a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b);
    //         a=a-9;
    //     }
    // }
}

function task2_4(){
var arr = [2,1,10,12,3,2,7,66,6666,777];
for (var i=1;i<arr.length;i++){
    for(var j=0;j<i;j++){
        if ( arr[j]>arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
    console.log(arr,);

}

function task2_5(){
    // Создать таблицу соответствия между весом в фунтах и весом в килограммах для значений от 1 до 10.
    let funt = 0.45359237;
    console.log("Фунты в килограммы");
    console.log("От 1 до 10");
    console.log("фунты кг");
    for(var i=1;i<11;i++){
        console.log(i+"    "+parseFloat((funt*i).toFixed(4)));
    }

}

function task2_6(){
    var plate = 22;
    var vanish = 5;
    for (var i=0;0<=plate;i++){
        if (vanish == 0){
            console.log("ваниш закончился.... аминь, осталось "+plate+" непомытых тарелок")
                   break;}
        if (plate==0){
            console.log("тарелки закончились, осталось "+vanish+" порций ваниша")
            break;}
        console.log("Осталось "+(vanish-0.5)+" порций Ваниша");
        vanish=vanish-0.5;
        plate=plate-1;
    }
}

function task2_7(){
    for (let i=1000;i<9999;i=i+3){
        console.log(i);
    }
}

function task2_8(){
    for (let i=90;i>=0;i=i-5){
        console.log(i);
    }
}

function task2_9(){
    let j=2;
    for (let i=0;i<20;i++){
        console.log(j);
        j=j*2;
    }

}
function task2_10() {

// var sum = 0;
// for (var i=1;i<=999999;i++) {
//     var a = i / 100000 + "";
//     var b = a.split('');
//     b.splice(1, 1);
//     if ((+b[0]) + (+b[1]) + (+b[2]) == (+b[3]) + (+b[4]) + (+b[5])) {
//         sum = sum + 1;
//     }
//     }
//     console.log(sum);

    sum = 0;
    for (var i = 999; i <= 999999; i++) {
        var a = i + "";
        if (a.length == 4) {
            a = "00" + i;
            var b = a.split('');
            if ((+b[0]) + (+b[1]) + (+b[2]) == (+b[3]) + (+b[4]) + (+b[5])) {
                sum = sum + 1;
            }
        }
        if (a.length == 5) {
            a = "0" + i;
            var b = a.split('');
            if ((+b[0]) + (+b[1]) + (+b[2]) == (+b[3]) + (+b[4]) + (+b[5])) {
                sum = sum + 1;
            }
        }
        if (a.length == 6) {
            a = "" + i;
            var b = a.split('');
            if ((+b[0]) + (+b[1]) + (+b[2]) == (+b[3]) + (+b[4]) + (+b[5])) {
                sum = sum + 1;
            }
        }

    }
    console.log(sum);
}

// Задача 1
// Напишите функцию, которая в зависимости от переданных
// в нее целочисленных аргументов "количество дней", будет выводить
// слово "день" в нужно форме ("если передали - 1, то 1 день",
//     "если передали - 3, то 3 дня" и т.д).
function task3_1() {
    var dayNumber = prompt("введите день");
    var lastNumber=dayNumber.split('').pop();
    if (dayNumber==1){
        console.log(dayNumber+" день")
    }
    if (dayNumber<5 && dayNumber>1 ){
        console.log(dayNumber+" дня")
    }
    if (dayNumber>=5 && dayNumber <=20){
        console.log(dayNumber+" дней")
    }
    if (dayNumber>20){
        if (lastNumber==1){
            console.log(dayNumber+" день")
        }
        if (lastNumber<5 && lastNumber>1 ){
            console.log(dayNumber+" дня")
        }
        if (lastNumber==5 || lastNumber==6 ||lastNumber==7 ||lastNumber==8 ||lastNumber==9 ||lastNumber==0){
            console.log(dayNumber+" дней")
        }
    }
}

// Задача 2 (не обязательная)
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива переданной функцией (fn), возвращая новый массив.
//     Функция не должна изменять переданный ей массив.
//     Если аргументы не заданы – выводить сообщение об ошибке
//
// Пример:
//     function square(x) { return x * x; } // возведение в квадрат
// console.log( map(square, [1, 2, 3, 4]) ); // [1, 4, 9, 16]
// console.log( map(square, []) ); // []

function map(fn, arr){
    var newarr = [];
    for(var i=0; i<arr.length; ++i){
        newarr.push(plus3(arr[i]))
    }
    return newarr
}

function plus3(x) {
    return x=x+3;
}

var arr = [1,4,4,5,6];
console.log(map(plus3, arr));

function task3_3() {
        var arr = prompt("введите числа через ,").split(',');
        var b = arr.slice(0);
        b[1]=99;
        console.log(arr,b);
    }



function task3_4_1() {
    var n = +prompt("введите первое число");
    var m = +prompt("введите второе число");
    if (n > m){
        var temp = n;
        n = m;
        m = temp;
    }
        let sum=0;
        for (let i=n;i<=m;i++){
            sum=sum+i;
        }
   console.log(sum);
    }

    // рекурсия
var sum=0;
function task3_4_2(n,m) {
    if (n<=m){
       sum = sum + n ;
       return task3_4_2(n+1,m);
      }
      else {
          return sum;
      }
}
function task3_5() {

}
// ======================

// Задание 1
// 1.1. создать 2 объекта sity1 и sity2 со следующими свойствами:
//     name, population, mayor
// двумя разными способами (первый объект одним способом, второй другим)
//    function createobj() {
       var sity1 = {
           name: 'SanktPeterburg',
           population: 5284800,
           mayor: 'Poltavchenko'
       };
       var sity2 = new Object();
       sity2.name = 'Moskow';
       sity2.population = 12500000;
       sity2.mayor = 'Sobyanin';
   // }
// 1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)
function changepop (){
    sity1.take_popilation_from_sity2 = function () {
        var proc = 10;
        var take10proc = Math.round(sity2.population / 100 * proc); //забирает по 10% от сити2 себе
        sity2.population = sity2.population - take10proc;
        sity1.population = sity1.population + take10proc;
    };
    console.log("Было население в городах " + sity1.population, sity2.population);
    sity1.take_popilation_from_sity2();
    console.log("Стало население в городах " + sity1.population, sity2.population);
};
// Написать функцию (вне этих объектов),
// которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)
 function showMayor(name) {
     console.log(name.mayor);
 }
showMayor(sity1);
showMayor(sity2);

// 1.4. Создать объект president c методом changeCountryMayor(),
// благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)
 var president = {
     changeCountryMayor:function (objname,newMayor) {

         console.log(objname.mayor+" был уволен президентом!!");
         objname.mayor = newMayor;
         console.log("Да здравствует новый мэр - "+newMayor);
     }
 };
 president.changeCountryMayor(sity1,'новый клевый мэр');


// Задание 2
// Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку
function searchsub(string,substring) {
    var position = 0;
    while (true) {
        var foundPosition = string.indexOf(substring, position);
        if (foundPosition == -1) break;
        console.log("подстрока "+ substring+" найдена на "+foundPosition+" позиции");
        position = foundPosition + 1;
    }
}
searchsub('шла Саша по шоссе и сосала сушку','ш');
// Задание 3
// Написать функцию - конвертер строки.
//     Возможности:
// перевод всех символов в верхний регистр,
//     перевод всех символов в нижний регистр,
function converter(string,registr) {
    if(registr ==0 ){
        string = string.toLowerCase();
    }
    if(registr == 1){
        string = string.toUpperCase();
    }
    console.log(string);
}
converter('БОЛЬШИЕ БУКВЫ СТАЛИ МАЛЕНЬКИМИ',0);
converter('маленькие буквы стали большими',1);

// Задание 4
// В переменной $date лежит дата в формате '30-11-2017'. Преобразуйте эту дату в формат '2017.11.30'.

var $date = '30-11-2017';
console.log("Было "+$date);
var arr = $date.split('-');
arr.reverse();
$date = arr.join('-');
console.log("Стало "+$date);
//
// Задание 5
// Допустим, пользователь вводит названия городов через пробел.
//     Вы их присваиваете переменной.
//     Переставьте названия так, чтобы они были упорядочены по алфавиту.

function sortstring(){
    var arr = prompt("ВВедите название городов через пробел");
    arr = arr.split(' ').sort();
    console.log(arr);
}

function risowatpole() {
    var razmerpola = +prompt("Введите размер поля");

    let targetdiv = document.getElementsByClassName('task5-1-1');//нашел нужный див
    let div = document.createElement('div');//создал див
    div.setAttribute('id','divpole');//дал диву id-divpole
    let table = document.createElement('table');//создаем таг table
    table.setAttribute('cellspacing', '0');
    table.setAttribute('cellpadding', '0');
    var y,tr;
    for (let i=0; i<razmerpola;i++){
        tr = document.createElement('tr');
        for (y=0; y<razmerpola;y++){
            tr.appendChild(document.createElement('td'));
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
    targetdiv[0].appendChild(div);


}

function showtime(){

        var now = new Date();
        document.getElementById('time').innerHTML = now.toLocaleTimeString();

    setTimeout(showtime, 1000);
}


let users = createUserArr();//  данные для вывода в таблицу
users.sort();
function createUserArr() {
    let name;
    let y;
    let namelenght;
    let arr = [];
    let arr2 = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','э','ю','я'];
    for (let i = 0; i < 100; i++){
        name="";
        namelenght=Math.floor(Math.random()*5)+5;
        for (y = 0;y<namelenght;y++){
            name+=arr2[Math.floor(Math.random()*(arr2.length))]
        }
        arr.push(
            {
                id: i,
                name: name,
                email: "Email "+i,
                phone: "+79991112233 "+i,
                position: "Должность "+i
            }
        )
    }
    return arr;
}

zapolnittablicy();

let thname = document.getElementById('col1');

thname.addEventListener('click', sorting);


function sorting() {
    function compare(a,b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }
   users.sort(compare);


}

function zapolnittablicy(){
let skolkostrok = Object.keys(users).length;
let skolkostolbcow = Object.keys(users[0]).length;
let targetdiv = document.getElementsByClassName('task5-3');//нашел нужный див
let div = document.createElement('div');//создал див
div.setAttribute('id','divpole');//дал диву id-divpole
div.setAttribute('id','divpole2');//дал диву id-divpole
let table = document.createElement('table');//создаем таг table
table.setAttribute('cellspacing', '0');
table.setAttribute('cellpadding', '0');
var y,tr,td,text,id,name,email,phone,position;
var tempmassiv=[];
  var  th;
    tr = document.createElement('tr');
    id = '№';
    name = "ИМЯ";
    email = "Email";
    phone = "Телефон";
    position = "Должность";
    tempmassiv=[id,name,email,phone,position];

    for (y=0; y<skolkostolbcow;y++) {
        text = document.createTextNode(tempmassiv[y]);
        th = document.createElement('th');
        th.setAttribute('id','col'+y);
        th.appendChild(text);
        tr.appendChild(th);
    }
    tempmassiv=[];
    table.appendChild(tr);
for (let i=0; i<skolkostrok;i++){
    tr = document.createElement('tr');
    id = users[i].id+1;
    name = users[i].name;
    email = users[i].email;
    phone = users[i].phone;
    position = users[i].position;
tempmassiv = [id,name,email,phone,position];
    for (y=0; y<skolkostolbcow;y++){
        text = document.createTextNode(tempmassiv[y]);
        td = document.createElement('td');
        td.appendChild(text);
        tr.appendChild(td);

    }
    table.appendChild(tr);
}
div.appendChild(table);
targetdiv[0].appendChild(div);
}

// Задача 1
// Дана радиокнопка и контейнер (div) с какой либо информацией.
//     Когда кнопка выбрана (checked) открывать div,
//     в противном случае, скрывать блок.
//вариант1
// let prov = true;
// let element = document.getElementById('radio');
// element.addEventListener('click', showhidden);
// // element.removeEventListener('click', clickHandler);
//
// function showhidden(event) {
//     if (prov){
//     document.getElementById('hiddendiv').style.display = "block";
//     prov = false;
//     return prov;
//     }
// else{
//     document.getElementById('radio').checked = false;
//         document.getElementById('hiddendiv').style.display = "none";
//         prov = true;
//         return prov;
//     }
//
//
// }
//вариант2
let element = document.getElementById('radio');
element.addEventListener('mousedown', showhidden);
element.addEventListener('click', cl);
element.addEventListener('mouseup', cl);
function cl(e) {
    e.preventDefault();
}
function showhidden(e) {
    e.preventDefault();
    if (element.checked) {
        document.getElementById('hiddendiv').style.display = "none";
        element.checked = false;
    }
    else {
        document.getElementById('hiddendiv').style.display = "block";
        element.checked = true;
    }
    return false;
}
//
// Задача 2
// Реализовать возможность добавления комментариев
// к статье.
//     Текст комментария пользователь вводит в <textarea>,
//     добавление происходит по нажатию на кнопку Комментировать.


let but = document.getElementById('buton');
let count=1;
let text;
but.addEventListener('click',createComment);
function createComment() {
    let val = document.getElementById('textarea').value;
    let comment = document.createElement('div');// контейнер с комментарием
    let container = document.getElementById('maincontainer');//главный див
    let container2 = document.createElement('div');
    let contfortext = document.createElement('div');
    let time = document.createElement('div');
    time.setAttribute('id','time');
    let now = new Date();
    time.appendChild(document.createTextNode('отправлен в '+now.toLocaleTimeString()));
    container2.setAttribute('id', 'container2');
    comment.setAttribute('id','newcomment');
    text = document.createTextNode('Это Ваш комментарий номер - '+count);
    contfortext.appendChild(text);
    console.log(contfortext);
    comment.appendChild(document.createTextNode(val));
    container2.appendChild(comment);
    container2.appendChild(contfortext);
    container2.appendChild(time);
    console.log(comment);
    count++;
    container.appendChild(container2);

}

// Задача 4
// Сгенерировать игровое поле (задача 1 предыдущего дз),
// в ячейки рандомно спрятать несколько призов.
//     Пользователю дается 3 попытки найти их -
// по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд),
// либо иконка, сообщающая, что приза нет.
//     Количество оставшихся попыток выводим рядом с игровым полем.
// задание про генерацию игрового поля
function genField() {
    let n = +prompt('введите размерность поля NxN');
    let field = document.createElement('div');
    field.setAttribute('id','field');
    let main = document.getElementsByClassName('task6-4');
    main[0].appendChild(field);
    console.log(n);
    for (let i=0; i<n*n; i++) {
        let cell = document.createElement("div");
        cell.style.height = field.offsetWidth/n + "px";
        cell.style.width = field.offsetHeight/n + "px";
        cell.classList.add("border");
        cell.classList.add("cells");
        field.appendChild(cell);
    }
}


// let field = document.getElementById('field'); // []
// console.log(field);
// let cells = field.children; // ['cell 1', 'cell 2', 'cell 3', 'cell 4', ]
// console.log(cells);
//
// function generatePrize(field, prizeCount) {
//     for (let i = 0; i <  prizeCount; i++){
//         field.children[Math.round(getRandom(0, field.children.length))]
//             .setAttribute("data-prize", ";)");
//         // field.children[Math.round(getRandom(0, field.children.length))]
//         //     .setAttribute("data-prize", ";)");
//     }
// }
//
// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }
//
// generatePrize(field, 6);
