let score = document.querySelector('.header__score p');



let gameField = document.getElementById('main__canvas');
let context = gameField.getContext('2d');

let fieldWidth = gameField.offsetWidth
let fieldHeight = gameField.offsetHeight
console.log(fieldWidth)
console.log(fieldHeight)

context.fillStyle = 'white'
context.fillRect(0, 0, fieldWidth, fieldHeight)

score.innerHTML = '0'