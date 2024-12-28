const registerForm = document.querySelector('.form__subscribe');
const formUpload = registerForm.querySelector('.form__button');
const formField = registerForm.querySelectorAll('.form__field');
const formLabel = registerForm.querySelectorAll('.form__label');

const validForm = () => {
  formUpload.addEventListener('click', () => {

    for (let i = 0; i < formField.length; i++) {
      if (!formField[i].validity.valid) {
        formField[i].classList.add('form__field--error');
        for (let j = 0; j < formField.length; j++) {
          formLabel[j].style.display = 'none';
        }
        return;
      } else if (formField[i].validity.valid) {
        formField[i].setCustomValidity('');
        formField[i].classList.remove('form__field--error');
        for (let j = 0; j < formField.length; j++) {
          formLabel[j].style.display = 'block';
        }
      }
    }
  });
};

function validateLength() {
  for (let i = 0; i < formField.length; i++) {
    formField[i].onmouseover = function () {
      for (let j = 0; j < formField.length; j++) {
        formLabel[j].style.display = 'none';
      }
    };
  }
}

export { validForm, validateLength };
