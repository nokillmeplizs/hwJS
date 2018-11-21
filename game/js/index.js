var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let enemys = [];
for( let i=0;i<20;i++){
    enemys.push(new Enemy());
}

var player = new Image();
player.src = "img/player.png";
var Radius = 10;
var x = canvas.width/2;
var y = canvas.height/2;

var stepX = 5;
var stepY = -5;
var posX = 50;
var posY = 50;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;



document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
function keyDown(e) {
    if(e.keyCode == 68) {
        rightPressed = true;
    }
    else if(e.keyCode == 65) {
        leftPressed = true;
    }
    else if(e.keyCode == 87) {
        upPressed = true;
    }
    else if(e.keyCode == 83) {
        downPressed = true;
    }
}
function keyUp(e) {
    if(e.keyCode == 68) {
        rightPressed = false;
    }
    else if(e.keyCode == 65) {
        leftPressed = false;
    }
    else if(e.keyCode == 87) {
        upPressed = false;
    }
    else if(e.keyCode == 83) {
        downPressed = false;
    }
}

function drawEnemy() {
    for( let i=0;i<enemys.length;i++){
        let imageEnemy = new Image();
        imageEnemy.src = enemys[i].path;
        ctx.drawImage(imageEnemy,
            enemys[i].enemyPosX,enemys[i].enemyPosY,
            50, 50);
    }
}

function drawPlayer() {
       ctx.drawImage(
        player,
        posX, posY,
        50,50);
}



function draw() {
    for( let i=0;i<enemys.length;i++){
        enemys[i].findPlayer(posX,posY)
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEnemy();
    drawPlayer();


    if(x + stepX > canvas.width-Radius || x + stepX < Radius) {
        stepX = -stepX;
    }
    if(y + stepY > canvas.height-Radius || y + stepY < Radius) {
        stepY = -stepY;
    }
    if( rightPressed && upPressed){
        posX += 3;
        posY -= 3;

    }
    else if( leftPressed && upPressed){
        posX -= 3;
        posY -= 3;

    }
    else if( rightPressed && downPressed){
        posX += 3;
        posY += 3;

    }
    else if( leftPressed && downPressed){
        posX -= 3;
        posY += 3;

    }
    else if(rightPressed) {
        posX += 3;
    }
    else if(leftPressed) {
        posX -= 3;
    }
    else if(upPressed) {
        posY -= 3;
    }
    else if(downPressed) {
        posY += 3;
    }


}

setInterval(draw, 10);