"use strict";

class Circle extends Figure {
    constructor (x1, y1, radius) {
           super(x1,y1);
           this.radius = radius;
    }

   CalculateArea () {

        return  this.area = Math.floor(Math.PI * Math.pow(this.radius, 2));
    }
    CalculatePerimetr () {

        return  this.perimetr = Math.floor(Math.PI * (this.radius * 2));
    }
}
