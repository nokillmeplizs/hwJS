class Enemy {
    constructor(){
        this.path = "img/enemy1.png";
        this.enemyPosX = Math.random() * (canvas.width - -20) - 50;
        this.enemyPosY = Math.random() * (canvas.height - -20) - 50;

    }
    findPlayer(posX,posY){
        if(this.enemyPosX<posX){
            this.enemyPosX+=Math.random() * (5 - 1) - 1;
        }
        else{
            this.enemyPosX-=Math.random() * (5 - 1) - 1;
        }
        if(this.enemyPosY<posY){
            this.enemyPosY+=Math.random() * (5 - 1) - 1;
        }
        else{
            this.enemyPosY-=Math.random() * (5 - 1) - 1;
        }
    }
}