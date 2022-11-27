function validate(item, validateFn, { onSuccess, onFail }) {
  validateFn(item) ? onSuccess?.() : onFail?.();
}

const inputElement = document.querySelector('input#validation-input');

const onChange = ({ currentTarget }) => validate(
  currentTarget.value,
  (v) => v.length <= parseInt(currentTarget.getAttribute('data-length') || 0),
  {
    onSuccess: () => currentTarget.setAttribute('class', 'valid'),
    onFail: () => currentTarget.setAttribute('class', 'invalid')
  }
);

inputElement.addEventListener('focus', onChange);
inputElement.addEventListener('blur', onChange);