const formContainer = document.querySelector('form.login-form');
const sendData = {};

const onValid = () => {
  formContainer.reset();
  console.log('Data:', sendData);
};

const onInvalid = () => {
  alert('All fields must be filled in!');
};

const isValidField = field => Boolean(field.value);

formContainer.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = Array.from(e.currentTarget.elements).filter(el => el.nodeName === 'INPUT');
  
  inputs.forEach(({ name, value }) => sendData[name] = value);
  inputs.every(isValidField) ? onValid() : onInvalid();
});