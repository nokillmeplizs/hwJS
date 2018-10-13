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
var freeland = gardenArea - (parseInt(gardenArea/gradkaArea))*gradkaArea;

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

function tasktest() {


}