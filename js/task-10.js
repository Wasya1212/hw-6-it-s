function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  if (amount <= 0) return '';

  const scaleCoef = 10;

  return Array.from({ length: amount }, (_, i) => `
    <div
      style="
        background-color:${getRandomHexColor()};
        width:${i * scaleCoef + 30}px;
        height:${i * scaleCoef + 30}px
      "
    ></div>
  `).join('');
};

const boxesContainer = document.querySelector('#boxes');
const boxesInput = document.querySelector('#controls input')
const createBoxBtn = document.querySelector('#controls button[data-create]');
const destroyBoxBtn = document.querySelector('#controls button[data-destroy]');

const onCreateBoxes = () => {
  boxesContainer.innerHTML = createBoxes(+boxesInput.value);
};

const onDestroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

createBoxBtn.addEventListener('click', onCreateBoxes);
destroyBoxBtn.addEventListener('click', onDestroyBoxes);