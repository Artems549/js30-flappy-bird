let canvas = document.getElementById('main__canvas');
let context = canvas.getContext('2d');
let score = document.querySelector('.header__score p');


const world = {
    x: 0,
    y: 0,
    width: 360,
    height: 640,
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
    img: new Image(),
    renderBird() {
        context.drawImage(this.img, this.x, this.y, this.width, this.height)
    },
}

const columns = {
    x: 160,
    y: -260,
    width: 64,
    height: 400,
    gap: 100,
    speed: 1,
    columnUp: new Image(),
    columnDown: new Image(),
    drawColumns() {
        context.drawImage(this.columnUp, this.x, this.y, this.width, this.height)
        context.drawImage(this.columnDown, this.x, this.y + this.height + columns.gap, columns.width, this.height)

    }
}

canvas.width = world.width;
canvas.height = world.height;
world.img.src = '../img/world.png';
bird.img.src = '../img/bird.png';
columns.columnUp.src = '../img/column-up.png';
columns.columnDown.src = '../img/column-down.png';


function renderGame() {

    world.renderWorld();
    bird.renderBird()
    columns.drawColumns()


}
setInterval(renderGame, 1000/60)
// requestAnimationFrame(renderGame)
