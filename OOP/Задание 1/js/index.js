"use strict";

let circle = new Circle(4,1,10);
console.log(circle);
console.log("Площадь круга равна = "+ circle.CalculateArea());
console.log("Длина окружности равна = " + circle.CalculatePerimetr());


let rectangle = new Rectangle(2,0,4,0,7,9);
console.log(rectangle);
console.log(rectangle.CalculateAB());
console.log(rectangle.CalculateArea());
console.log(rectangle.CalculatePerimetr());


let triangle = new Triangle(15,33,22,64,3,1);
console.log(triangle);
console.log(triangle.CalculateArea());
console.log(triangle.CalculatePerimetr());