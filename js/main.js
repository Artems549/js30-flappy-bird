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
canvas.width = world.width;
canvas.height = world.height
world.img.src = '../img/world.png'

function renderGame() {

    world.renderWorld();



}
setInterval(renderGame, 1000/60)
