const fontSizeInput = document.querySelector('input#font-size-control');
const textContainer = document.querySelector('span#text');

const onChange = ({ currentTarget: { value } }) => {
  textContainer.style.fontSize = `${value}px`;
};

fontSizeInput.addEventListener('input', onChange);