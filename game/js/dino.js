class Dino {
    constructor(){
        this.path = "img/dino2.png";
        this.size = {width:100+dinoEatEnemy,height:100+dinoEatEnemy};
        this.position = {dinoX:-100,dinoY:Math.random()*(canvas.height-0)};
        this.speed = 20;

    }
    run(){
        this.position.dinoX+=this.speed;
    }
}
