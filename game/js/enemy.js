class Enemy {
    constructor(){
        this.path = "img/enemy2.png";
        this.health = Math.random()*(5-1)+1;
        this.size = {width:30*this.health,height:30*this.health};
        this.enemyPosX = Math.floor(Math.random()*3);

        if (this.enemyPosX ===0){
            this.enemyPosX = -100;
            this.enemyPosY = Math.random()*(canvas.height-0);
        }
        else  if(this.enemyPosX ===1){
            this.enemyPosX = canvas.width+100;
            this.enemyPosY = Math.random()*(canvas.height-0);
        }
        else if (this.enemyPosX ===2){
            this.enemyPosX = Math.random()*(canvas.width - 0);
            this.enemyPosY = Math.round(Math.random()) ? canvas.height+100:-100;
        }

        this.speed = ((Math.random()*(6-4.9)+4.9)/this.health)+((score/1000));

    }
    findPlayer(posX,posY){
        if(this.enemyPosX<posX-this.size.width/4){
            this.enemyPosX+=this.speed;
        }
        else{
            this.enemyPosX-=this.speed;
        }
        if(this.enemyPosY<posY-this.size.height/4){
            this.enemyPosY+=this.speed;
        }
        else{
            this.enemyPosY-=this.speed;
        }
    }
}
