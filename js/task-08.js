// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция. При нажатии на 
// кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр 
// amount - число. Функция создает столько div, сколько указано в 
// amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs ={
    inputEl: document.querySelector('input'),
    addBoxesBtn: document.querySelector('#controls button[data-action="render"]'),
    destroyBtn: document.querySelector('#controls button[data-action="destroy"]'),
    boxesEl: document.querySelector('#boxes'),
}

refs.addBoxesBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

const randomRgb = () => {
    return Math.floor(Math.random() * 255);
  };

function createBoxes(amount) {
    amount = Number(refs.inputEl.value);
    refs.boxesEl.innerHTML = '';
    const divArr = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = `rgb(
        ${randomRgb()},
        ${randomRgb()},
        ${randomRgb()}
        )`;
    divEl.style.width = i*10 + 20 + 'px';
    divEl.style.height = i*10 + 20 + 'px';

    divArr.push(divEl);
  }
  console.log(divArr);
  return refs.boxesEl.append(...divArr);
}


function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}