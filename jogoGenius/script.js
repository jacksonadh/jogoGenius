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
  });
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