let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue'); //0
const green = document.querySelector('.green'); //1
const yellow = document.querySelector('.yellow'); //2
const red = document.querySelector('.red'); //3

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = creatColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected')
  }, number - 150);
}

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação ${score}\n Você acertou! Iniciando proximo nível!`)
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  creatColorElement(color).classList.add('selected');

  setTimeout(() => {
    creatColorElement(color).classList.remove('selected');
    checkOrder();
  })
}

let creatColorElement = (color) => {
  if (color == 0) {
    return blue;
  } else if (color == 1) {
    return green;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return red;
  }
}

let nextLevel = () => {
  score++;
  shuffleOrder();
}

let lose = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo\nClique em Ok para iniciar o jogo`);
  order = [];
  clickedOrder = [];
  playGame();
}

let playGame = () => {
  alert('Bem vindo ao Genius! Vamos começar?')
  score = 0;
  nextLevel();
}

blue.onclick = () => click(0);
green.onclick = () => click(1);
yellow.onclick = () => click(2);
red.onclick = () => click(3);

playGame();