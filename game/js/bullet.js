class Bullet {
    constructor(playerX,playerY,MOUSE_clientX,MOUSE_clientY){
        this.path = "img/heart.png";
        this.size = {width:20,height:20};
        this.position = {XXX:playerX,YYY:playerY};
        this.mousePos = {XX:MOUSE_clientX,YY:MOUSE_clientY};
        this.x = (this.mousePos.XX-this.position.XXX)*0.05;
        this.y = (this.mousePos.YY-this.position.YYY)*0.05;
        // this.angle = Math.atan2(this.y, this.x);
        // this.degrees = 180*this.angle/Math.PI;
        // this.xv =500*Math.cos(this.degrees)/35;
        // this.xy =-500*Math.sin(this.degrees)/35;

               // this.cosA=Math.cos((this.position.XXX*this.mousePos.XX+this.position.YYY*this.mousePos.YY)
        //     /Math.sqrt(Math.pow(this.position.XXX,2)+Math.pow(this.position.YYY,2))*Math.sqrt(Math.pow(this.mousePos.XX,2)+Math.pow(this.mousePos.YY,2)));
    }

    flyBullet(){


        this.position.XXX +=this.x;
        this.position.YYY +=this.y;
}
}
