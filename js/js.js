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
    // не нравится мне как я сделал, может есть другой вариант, и не понятно как добавить пробел если длина a*b меньше 10
    let a = 1;
    let b = 1;
for (;a<11;a++){
  for (;b<11;b++){
      console.log(a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b,++a*b);
      a=a-9;
  }
}

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
//сам придумал, по-моему зачетно получилось)
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


