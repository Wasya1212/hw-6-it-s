const nameInput = document.querySelector('input#name-input');
const nameContainer = document.querySelector('span#name-output');

const onNameChange = ({ currentTarget: { value: name } }) => {
  nameContainer.textContent = name || 'Anonymous';
};

nameInput.addEventListener('input', onNameChange);