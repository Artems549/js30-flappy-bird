let canvas = document.getElementById('main__canvas');
let context = canvas.getContext('2d');
let scoreField = document.querySelector('.header__score p');
let counter = 0;
let animation;
let isBirdGravity = true;
let bestScoreBtn = document.querySelector('.header__modals-modal-score-btn button');
let bestScoreText = document.querySelector('.header__modals-modal-score-text');
let settingBtn = document.querySelector('.header__modals-modal-setting-img img');
let settingSet = document.querySelector('.header__modals-modal-settings')
let settingSpeedInput = document.querySelector('.header__modals-modal-settings-speed input');
let settingSpeedBtn = document.querySelector('.header__modals-modal-settings-btn');
let modalGameOver = document.querySelector('.modals-modal__game-over');
let restartBtn = document.querySelector('.modals-modal__game-over button');
const bestResult = []

canvas.addEventListener('click', function() {
    bestScoreText.classList.remove('active-text')

    settingSet.classList.remove('active-set')
})
bestScoreBtn.addEventListener('click', function() {
    bestScoreText.classList.toggle('active-text')
})
settingBtn.addEventListener('click', function() {
    settingSet.classList.toggle('active-set');
})






const world = {
    x: 0,
    y: 0,
    width: 360,
    height: 640,
    score: 0,
    img: new Image(),
    renderWorld() {
        world.im
        context.drawImage(world.img, world.x, world.y, world.width, world.height)
    },
}


const bird = {
    x: 50,
    y: world.height / 2 - 25,
    width: 44,
    height: 34,
    gravity: 0.25,
    boost: 0.3,
    img: new Image(),
    renderBird() {
        context.drawImage(this.img, this.x, this.y, this.width, this.height)
    },
}
class columns {
    constructor(x) {
        this.x = x;
        this.y = -260;
        this.width = 64;
        this.height = 400;
        this.gap = 150;
        this.speed = settingSpeedInput.value;
        this.columnUp = new Image();
        this.columnDown = new Image();
        this.columnUp.src = './img/column-up.png';
        this.columnDown.src = './img/column-down.png';
    }

    drawColumns() {
        context.drawImage(this.columnUp, this.x, this.y, this.width, this.height);
        context.drawImage(this.columnDown, this.x, this.y + this.height + this.gap, this.width, this.height);
    }
}
scoreField.innerHTML = world.score;
canvas.width = world.width;
canvas.height = world.height;
world.img.src = './img/world.png';
bird.img.src = './img/bird.png';
settingSpeedBtn.addEventListener('click', function() {
    columns.speed = settingSpeedInput.value
})

const columnsMove = [new columns(world.width), new columns(world.width + 230)];

console.log(columnsMove[0].x)
function renderGame() {
    world.renderWorld();
    bird.renderBird()
    birdGravity()
    columnsMove.forEach((column,i) => {
        column.x -= column.speed
        column.drawColumns()

        if(column.x < column.width * -1) {
            setNewElement(column)
            upDateScore()
            
        }
        
        if(world.score === 10) {
            console.log('You win!!!')
        }
        gameOver(column)
    })

    document.addEventListener('keydown', jumpBird)

    
    animation = requestAnimationFrame(renderGame)

}

animation = requestAnimationFrame(renderGame)


function setNewElement(column) {
    column.x = world.width + 50;
    column.y = Math.random() * -260 + 0;
}
function upDateScore() {
    world.score += 1;
    scoreField.innerHTML = world.score
}

function jumpBird(e) {
    if(e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 87 || e.keyCode == 18) {
        bird.gravity =  -5
    }
}

function gameOver(column, i) {
    if((column.x < bird.x + bird.width && bird.y < column.y + column.height) ||
       (column.x < bird.x + bird.width && bird.y + bird.height > column.y + column.height + column.gap)) {
        if(column.x + column.width < bird.x) {
            console.log('return')
            return
        }
        columnsMove[1].speed = 0;
        columnsMove[0].speed = 0;
        isBirdGravity = false;
        modalGameOver.classList.add('active-game-over')
    }
    if(bird.y < 0 || bird.y + bird.height > 570) {
        columnsMove[1].speed = 0;
        columnsMove[0].speed = 0;
        isBirdGravity = false;
        modalGameOver.classList.add('active-game-over')

    }

}

function birdGravity() {
    if(isBirdGravity) {
        bird.gravity += bird.boost
        bird.y += bird.gravity;
    }
}
function restartGame(e) {
    bird.y = world.height / 2 - 25;
    columnsMove[0] = new columns(world.width);
    columnsMove[1] = new columns(world.width + 230);
    columnsMove[0].speed = settingSpeedInput.value;
    columnsMove[1].speed = settingSpeedInput.value;
    modalGameOver.classList.remove('active-game-over');
    isBirdGravity = true;
    bird.gravity = 0.25;
    
    bestResult.push(world.score);
    world.score = 0;
    
    console.log(bestResult)
}
restartBtn.addEventListener('click', restartGame)
