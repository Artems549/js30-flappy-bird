let score = document.querySelector('.header__score p');
let gameField = document.getElementById('main__canvas');
let context = gameField.getContext('2d');
let fieldWidth = 360;
let fieldHeight = 640;
let bird = {
    x: fieldWidth / 8,
    y: fieldHeight / 2,
    width: 34,
    height: 24,
}

let speedX = -2;
let speedY = 0;
let gravity = 0.35;

gameField.width = fieldWidth;
gameField.height = fieldHeight;



score.innerHTML = '0';





window.onload = function() {
    let fieldBird = new Image();
    let fieldColumnUp = new Image();
    let fieldColumnDown = new Image();


    fieldBird.src = '../img/bird.png';
    fieldColumnUp.src = '../img/column-up.png';
    fieldColumnDown.src = '../img/column-down.png';



    fieldBird.onload = function() {
        context.drawImage(fieldBird, bird.x, bird.y, bird.width, bird.height)
    }
    document.addEventListener('keydown', moveBird)

    requestAnimationFrame(game);
}



function game() {
    requestAnimationFrame(game);





}






function moveBird(e) {
    if(e.keyCode === 38 || e.keyCode === 32) {
        bird.y = -6
    }
}












// let birdX = fieldWidth / 8;
// let birdY = fieldHeight / 2
// let birdWidth = 34;
// let birdHeight = 24
