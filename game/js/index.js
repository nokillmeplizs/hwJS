let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let maxZombie = 100;
let enemys = [];
let bullets = [];
let dinos =[];
let player = new Player;
let playerHealth = 10;
let playerSpeed = 10;
let playerSize = {width:50,height:30};
let Radius = 10;
let x = canvas.width/2;
let y = canvas.height/2;
let stepX = 5;
let stepY = -5;
let posX = canvas.width/2;
let posY = canvas.height/2;
let enterPressed = false;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;
let countBullet = 0;
let countTouch = 0;
let countGameover = 0;
let MOUSE_clientX;	// координата X мыши относительно окна
let MOUSE_clientY;	// координата Y мыши относительно окна
let score = 0;
let spriteX = 1341;
let msg = '';
let dinoEatEnemy = 0;

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
document.onmousemove = function(objEvent) {
        MOUSE_clientX = objEvent.clientX;
        MOUSE_clientY = objEvent.clientY;
};

// function lengthdir_x(len, dir){
//     return Math.cos(dir * Math.PI / 180) * len
// }
//
// function lengthdir_y(len, dir){
//     return Math.sin(dir * Math.PI / 180) * len
// }
// var angleDeg = Math.atan2(-1,1);
// console.log(angleDeg);

function printText(font, color, text, x, y) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
}

function spawnZombie() {
    if (enemys.length <maxZombie){
        for( let i=0;i<20;i++){
            enemys.push(new Enemy());
        }
    }
}
spawnZombie();
setInterval(spawnZombie,15000);


function collisonBulletWithEnemy() {
    for (let i = 0; i < enemys.length; i++) {

        for (let j = 0; j < bullets.length; j++) {
            if (bullets[j].position.XXX > enemys[i].enemyPosX && bullets[j].position.XXX < enemys[i].enemyPosX + enemys[i].size.width / 2 &&
                bullets[j].position.YYY > enemys[i].enemyPosY &&
                bullets[j].position.YYY < enemys[i].enemyPosY + enemys[i].size.height / 2) {
                enemys[i].health--;
                bullets.splice(j, 1);
            }
            if (enemys[i].health < 1) {
                enemys.splice(i, 1);
                score += 1;

            }
        }
    }
    for (let i = 0; i < enemys.length; i++) {
        for (let j = 0; j < dinos.length; j++) {
            if (dinos[j].position.dinoX > enemys[i].enemyPosX && dinos[j].position.dinoX < enemys[i].enemyPosX + enemys[i].size.width &&
                dinos[j].position.dinoY < enemys[i].enemyPosY &&
                dinos[j].position.dinoY+dinos[j].size.height > enemys[i].enemyPosY) {
                enemys.splice(i, 1);
                dinoEatEnemy++;
            }
        }

    }

    for (let i = 0; i < enemys.length; i++) {
        if (posX >enemys[i].enemyPosX &&
            posX <enemys[i].enemyPosX + enemys[i].size.width / 2 &&
            posY> enemys[i].enemyPosY &&
            posY<enemys[i].enemyPosY + enemys[i].size.height / 2){
            countTouch++;
            if(countTouch === 5 && playerHealth!==0){
                playerHealth--;
                countTouch = 0;
            }
            if (playerHealth ===0 && countGameover!==1){
                msg = 'Вы были сожраны Зомбаком - нажмите ENTER для рестарта';
                countGameover =1;
            }

        }
    }

    for (let i = 0; i < dinos.length; i++) {
        if (posX >dinos[i].position.dinoX &&
            posX <dinos[i].position.dinoX + dinos[i].size.width / 2 &&
            posY> dinos[i].position.dinoY &&
            posY<dinos[i].position.dinoY + dinos[i].size.height){
            playerHealth=0;
            playerSpeed = 0;
            if (playerHealth ===0 && countGameover!==1) {
                msg = 'Вы были сожраны Динозавром Гугла - нажмите ENTER для рестарта';
                countGameover = 1;
            }
            }
        }
     if (posX<50){
         posX=50;
     }
     if (posX>canvas.width-50){
         posX=canvas.width-50;
     }
     if (posY<0){
         posY=0;
     }
     if (posY>canvas.height-30){
         posY=canvas.height-30;
     }
}

function drawEnemy() {
    for( let i=0;i<enemys.length;i++){
        let imageEnemy = new Image();
        if(enemys[i].enemyPosX<posX){
            imageEnemy.src = enemys[i].path;
        }
        else{
            imageEnemy.src = 'img/enemy1.png';
        }

        ctx.drawImage(imageEnemy,
            enemys[i].enemyPosX,enemys[i].enemyPosY,
            enemys[i].size.width,enemys[i].size.height);
    }
}


function drawDino() {

    if (score % 3 === 0 && score !== 0 && dinos.length <5) {

            dinos.push(new Dino());

    }
    for (let i = 0; i < dinos.length; i++) {
        dinos[i].run();
        let dinoimg = new Image();
        dinoimg.src = dinos[i].path;

        spriteX=spriteX===1776?spriteX=1341:spriteX+=87;
        ctx.drawImage(dinoimg,
            spriteX,
            0,
            87,
            90,
            dinos[i].position.dinoX,
            dinos[i].position.dinoY,
            dinos[i].size.width,
            dinos[i].size.height);
        if (dinos[i].position.dinoX > canvas.width+2000) {
            dinos.splice(i, 1);
        }
    }
}

function drawBullet() {
    if (spacePressed){
        countBullet++;
        if(countBullet === 5) {
            bullets.push(new Bullet(posX, posY+player.size.height/2,MOUSE_clientX,MOUSE_clientY));
            countBullet = 0;
        }
     }

    for( let i=0;i<bullets.length;i++){
        bullets[i].flyBullet();
        let Bulimg = new Image();
        Bulimg.src = bullets[i].path;
        ctx.drawImage(Bulimg,
            bullets[i].position.XXX,bullets[i].position.YYY,
            bullets[i].size.width,bullets[i].size.height,
            );
        if (bullets[i].position.XXX > canvas.width || bullets[i].position.YYY > canvas.height){
            bullets.splice(i,1);
        }
    }
}

function drawPlayer() {
    let playerImg = new Image();
    playerImg.src = player.path;
    if (leftPressed){
        playerSize = {width:50,height:30};
        playerImg.src = 'img/playerleft.png';
    }
    else if (rightPressed){
        playerSize = {width:50,height:30};
        playerImg.src = player.path;
    }
    else if (upPressed){
        playerSize = {width:30,height:50};
        playerImg.src = 'img/playerup.png';
    }
    else if (downPressed){
        playerSize = {width:30,height:50};
        playerImg.src = 'img/playerdown.png';
    }
       ctx.drawImage(
        playerImg,
        posX, posY,
        playerSize.width,playerSize.height);
        playerSize = {width:50,height:30};
}

function drawBG() {
    let BgImg = new Image();
    BgImg.src = 'img/bg.jpg';
    ctx.drawImage(
        BgImg,
        0, 0,
        canvas.width,
        canvas.height);
}
function drawGameOver() {
    let GmImg = new Image();
    GmImg.src = 'img/gameover.jpg';
    ctx.drawImage(
        GmImg,
        0, 0,
        canvas.width,
        canvas.height);
}





function draw() {
    for( let i=0;i<enemys.length;i++){
        enemys[i].findPlayer(posX,posY)
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBG();
    drawEnemy();
    drawPlayer();
    drawBullet();
    collisonBulletWithEnemy();
    printText('30px Arial','white','убито зомбей '+score,80,30);
    printText('20px Arial','red','Жизней: '+playerHealth,canvas.width-200,30);
    drawDino();
    if (playerHealth === 0){
        drawGameOver();
    }
    printText('33px Arial','red',msg,canvas.width/4,canvas.height/2+200);


    if(x + stepX > canvas.width-Radius || x + stepX < Radius) {
        stepX = -stepX;
    }
    if(y + stepY > canvas.height-Radius || y + stepY < Radius) {
        stepY = -stepY;
    }
    if( rightPressed && upPressed){
        posX += playerSpeed;
        posY -= playerSpeed;

    }
    else if( leftPressed && upPressed){
        posX -= playerSpeed;
        posY -= playerSpeed;

    }
    else if( rightPressed && downPressed){
        posX += playerSpeed;
        posY += playerSpeed;

    }
    else if( leftPressed && downPressed){
        posX -= playerSpeed;
        posY += playerSpeed;

    }
    else if(rightPressed) {
        posX += playerSpeed;
    }
    else if(leftPressed) {
        posX -= playerSpeed;
    }
    else if(upPressed) {
        posY -= playerSpeed;
    }
    else if(downPressed) {
        posY += playerSpeed;
    }
    else if(enterPressed){
        location.reload();
    }
}
// function start(){
//     draw();
//     requestAnimationFrame(start);
//
// }
// start();
setInterval(draw,35);

//добавил спавн зомбей со всех сторон
//изменил коллизию дино+зомби +игрок
// добавил счетчик съеденыъ зомбей и рост дино от счетчика
//добавил разворот зомбей за игроком
//добавил поворот игрока
