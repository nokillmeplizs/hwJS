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

var sum = 0;
for (var i=1;i<=999999;i++) {
    var a = i / 100000 + "";
    var b = a.split('');
    b.splice(1, 1);
    if ((+b[0]) + (+b[1]) + (+b[2]) == (+b[3]) + (+b[4]) + (+b[5])) {
        sum = sum + 1;
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
};
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
};
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

function sortstring() {
    var arr = prompt("ВВедите название городов через пробел");
    arr = arr.split(' ').sort();
    console.log(arr);
}
