class Enemy {
    constructor(){
        this.path = "img/enemy1.png";
        this.enemyPosX = Math.random() * (canvas.width - -20) - 50;
        this.enemyPosY = Math.random() * (canvas.height - -20) - 50;
        this.speed = Math.random() * (0.4-0.2)+0.2;

    }
    findPlayer(posX,posY){
        if(this.enemyPosX<posX){
            this.enemyPosX+=this.speed+(Math.random() * (0.5-0.1)+0.1);
        }
        else{
            this.enemyPosX-=this.speed+(Math.random() * (0.5-0.1)+0.1);
        }
        if(this.enemyPosY<posY){
            this.enemyPosY+=this.speed+(Math.random() * (0.5-0.1)+0.1);
        }
        else{
            this.enemyPosY-=this.speed+(Math.random() * (0.5-0.1)+0.1);
        }
    }
}