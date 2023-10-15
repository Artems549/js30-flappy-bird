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
    width: 34,
    height: 24,
    img: new Image(),
    renderBird() {
        context.drawImage(this.img, this.x, this.y, this.width, this.height)
    },
}

canvas.width = world.width;
canvas.height = world.height;
world.img.src = '../img/world.png';
bird.img.src = '../img/bird.png';



function renderGame() {

    world.renderWorld();
    bird.renderBird()



}
setInterval(renderGame, 1000/60)
