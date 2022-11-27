let counterValue = 0;

const counterValueContainer = document.querySelector('#value');

const decreaseValueBtn = document.querySelector('button[data-action="decrement"]');
const increaseValueBtn = document.querySelector('button[data-action="increment"]');

const onDecrementClick = () => counterValueContainer.textContent = --counterValue;
const onIncrementClick = () => counterValueContainer.textContent = ++counterValue;

decreaseValueBtn?.addEventListener('click', onDecrementClick);
increaseValueBtn?.addEventListener('click', onIncrementClick);