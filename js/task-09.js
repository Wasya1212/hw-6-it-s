function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('button.change-color');
const bgcContainer = document.querySelector('span.color');

const onColorChange = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  bgcContainer.textContent = color;
};

changeColorBtn.addEventListener('click', onColorChange);