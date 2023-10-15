let canvas = document.getElementById('main__canvas');
let context = canvas.getContext('2d');
let scoreField = document.querySelector('.header__score p');
let counter = 0;


const world = {
    x: 0,
    y: 0,
    width: 360,
    height: 640,
    score: 0,
    img: new Image(),
    renderWorld() {
        context.drawImage(world.img, world.x, world.y, world.width, world.height)
    },
}


const bird = {
    x: 50,
    y: world.height / 2 - 25,
    width: 44,
    height: 34,
    gravity: 0.25,
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
        this.gap = 100;
        this.speed = 4;
        this.columnUp = new Image();
        this.columnDown = new Image();
        this.columnUp.src = '../img/column-up.png';
        this.columnDown.src = '../img/column-down.png';
    }

    drawColumns() {
        context.drawImage(this.columnUp, this.x, this.y, this.width, this.height);
        context.drawImage(this.columnDown, this.x, this.y + this.height + this.gap, this.width, this.height);
    }
}
scoreField.innerHTML = world.score;
canvas.width = world.width;
canvas.height = world.height;
world.img.src = '../img/world.png';
bird.img.src = '../img/bird.png';


const columnsMove = [new columns(world.width), new columns(world.width + 230)];

console.log(columnsMove[0].x)
function renderGame() {
    world.renderWorld();
    bird.renderBird()
    bird.gravity += 0.3
    bird.y += bird.gravity;
    columnsMove.forEach(column => {
        column.x -= column.speed
        column.drawColumns()

        if(column.x < column.width * -1) {
            setNewElement(column)
            upDateScore()
        }
        
        if(world.score === 10) {
            console.log('You win!!!')
        }
    })

    document.addEventListener('keydown', jumpBird)





    requestAnimationFrame(renderGame)
}
requestAnimationFrame(renderGame)


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