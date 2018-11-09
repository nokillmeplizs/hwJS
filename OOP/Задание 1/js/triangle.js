"use strict";
class Triangle extends Rectangle {
    constructor (x1, y1, x2, y2, x3, y3) {
        super(x1, y1, x2, y2, x3, y3);
    }

    CalculateBD  () {
        return Math.sqrt(Math.pow((this.x3 - this.x1),2) + Math.pow((this.y3 - this.y1),2));
    }

    CalculateArea () {
        return this.area = Math.floor(0.5 * ((this.x1-this.x3)*(this.y2-this.y3)-(this.x2-this.x3)*(this.y1-this.y3)));

    }

    CalculatePerimetr () {
        return this.perimetr = Math.floor(this.CalculateAB() + this.CalculateAD() + this.CalculateBD());
    }
}
