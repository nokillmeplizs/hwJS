"use strict";

class Rectangle extends Figure {
    constructor (x1, y1, x2, y2,x3,y3) {
        super(x1, y1, x2, y2);
        this.x3 = x3;
        this.y3 = y3;
    }

    CalculateAB () {
        return Math.sqrt(Math.pow((this.x2 - this.x1),2) + Math.pow((this.y2 - this.y1),2));

    }

    CalculateAD () {
        return Math.sqrt(Math.pow((this.x3 - this.x2),2) + Math.pow((this.y3 - this.y2),2));
    }

    CalculateArea () {
        return this.area = Math.floor(this.CalculateAB() * this.CalculateAD());


    }
    CalculatePerimetr () {
        return this.perimetr = Math.floor((this.CalculateAB() + this.CalculateAD()) * 2);
    }
}
