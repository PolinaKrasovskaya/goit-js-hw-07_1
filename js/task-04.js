// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать 
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.style.width = '40px';
decrementBtn.style.backgroundColor = 'pink';
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.style.width = '40px';
incrementBtn.style.backgroundColor = 'pink';
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function() {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
})

incrementBtn.addEventListener('click', function() {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})