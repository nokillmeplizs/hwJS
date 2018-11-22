class Bullet {
    constructor(playerX,playerY){
        this.path = "img/bullet.png";
        this.size = {width:20,height:20};
        this.position = {XXX:playerX,YYY:playerY};
    }
    flyBullet(){
        this.position.XXX +=10;
}
}