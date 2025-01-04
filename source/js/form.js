const form = document.querySelector('.form__group');
// if (!form) return; // Проверка существования формы

const inputList = Array.from(form.querySelectorAll('.form__input'));
const buttonElement = form.querySelector('.form__button');

let isFormSubmitted = false; // Флаг для отслеживания попытки отправки формы

// Инициализация валидации
startValidation();

function startValidation() {
  toggleButtonState();

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    isFormSubmitted = true; // Устанавливаем флаг, что форма была отправлена

    // Проверка валидности всех полей
    const isFormValid = inputList.every((inputElement) => {
      return inputElement.validity.valid; // Возвращает true, если поле валидно
    });

    if (isFormValid) {
      submitForm(); // Отправка формы, если все поля валидны
    } else {
      // Показываем стандартное сообщение об ошибке браузера
      inputList.forEach((inputElement) => {
        if (!inputElement.validity.valid) {
          inputElement.reportValidity(); // Показывает стандартное сообщение об ошибке
        }
      });
    }
  });

  inputList.forEach((inputElement) => {
    const labelElement = form.querySelector(`label[for="${inputElement.id}"]`);

    inputElement.addEventListener('input', () => {
      toggleLabelVisibility(inputElement, labelElement); // Скрыть/показать label
      if (isFormSubmitted) inputElement.reportValidity(); // Показываем ошибку, если форма уже отправлялась
      toggleButtonState();
    });

    inputElement.addEventListener('blur', () => {
      if (isFormSubmitted) inputElement.reportValidity(); // Показываем ошибку, если форма уже отправлялась
    });

    // Инициализация видимости label при загрузке страницы
    toggleLabelVisibility(inputElement, labelElement);
  });

  // Очистка полей формы при уходе со страницы
  window.addEventListener('beforeunload', clearFormInputs);
}

// Функция для скрытия/показа label
function toggleLabelVisibility(inputElement, labelElement) {
  if (inputElement.value.trim() !== '') {
    labelElement.hidden = true; // Скрыть label, если поле не пустое
  } else {
    labelElement.hidden = false; // Показать label, если поле пустое
  }
}

// Проверка, есть ли невалидные поля
function hasInvalidInput() {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

// Переключение состояния кнопки
function toggleButtonState() {
  if (hasInvalidInput()) {
    buttonElement.classList.add('form__button--inactive');
    buttonElement.setAttribute('aria-disabled', 'true');
  } else {
    buttonElement.classList.remove('form__button--inactive');
    buttonElement.setAttribute('aria-disabled', 'false');
  }
}

// Отправка формы
function submitForm() {
  form.submit();
}

// Функция для очистки полей формы
function clearFormInputs() {
  inputList.forEach((inputElement) => {
    inputElement.value = ''; // Очистка значения поля
    const labelElement = form.querySelector(`label[for="${inputElement.id}"]`);
    if (labelElement) {
      labelElement.hidden = false; // Показать label, если поле очищено
    }
  });
}
