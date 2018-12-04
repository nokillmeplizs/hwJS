function keyDown(e) {
    if(e.keyCode == 68) {
        rightPressed = true;
    }
    if(e.keyCode == 13) {
        enterPressed = true;
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
    else if(e.keyCode ==32) {
        spacePressed = true;
    }
}
function keyUp(e) {
    if(e.keyCode == 68) {
        rightPressed = false;
    }
    if(e.keyCode == 13) {
        enterPressed = false;
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
    else if(e.keyCode ==32) {
        spacePressed = false;
    }
}