//Напиши скрипт створення і очищення колекції елементів. Користувач
//вводить кількість елементів в input і натискає кнопку Створити, після
//чого рендериться колекція. Натисненням на кнопку Очистити, колекція
//елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр -
//число. Функція створює стільки <div>, скільки вказано в amount і
//додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від
//попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX.
//Використовуй готову функцію getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий
//спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const datacreateEl = document.querySelector("[data-create]");
const datadestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const allElBox = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    allElBox.push(divEl);
    console.log(divEl);
  }
  return allElBox;
}
console.log(createBoxes);

// const inputNum = document.querySelector("#controls>input");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");
// const boxes = document.querySelector("#boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBoxes = (amount) => {
//   const elementsToAdd = [];
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement("div");
//     div.style.height = `${30 + 10 * i}px`;
//     div.style.width = `${30 + 10 * i}px`;
//     div.style.background = getRandomHexColor();
//     elementsToAdd.push(div);
//   }
//   return elementsToAdd;
// };

// const destroyBoxes = () => {
//   boxes.innerHTML = "";
// };

// btnCreate.addEventListener("click", () => {
//   let boxesToAdd = createBoxes(inputNum.value);
//   boxes.append(...boxesToAdd);
// });

// console.log(inputNum.value);

// btnDestroy.addEventListener("click", () => {
//   destroyBoxes.call();
// });
