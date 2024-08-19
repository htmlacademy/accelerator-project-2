const validateForm = () => {
  if (document.querySelector('form') && document.querySelector('input[type="tel"]') && document.querySelector('input[type="email"]')) {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const digitsOnlyRegex = /^\d+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.рф)?$/;

    const showError = (input, errorMessage) => {
      const parent = input.parentElement;
      const errorText = parent.querySelector('.form__error-text');

      parent.classList.add('error');
      input.classList.add('error');

      errorText.textContent = errorMessage;
      errorText.style.display = 'block';
    };

    const hideError = (input) => {
      const parent = input.parentElement;
      const errorText = parent.querySelector('.form__error-text');

      parent.classList.remove('error');
      input.classList.remove('error');

      errorText.textContent = '';
      errorText.style.display = 'none';
    };

    const validatePhone = (input) => {
      const value = input.value.trim();

      if (value === '') {
        showError(input, 'Поле Телефон обязательно для заполнения');
      } else if (!digitsOnlyRegex.test(value)) {
        showError(input, 'Поле Телефон должно содержать только цифры');
      } else {
        hideError(input);
      }
    };

    const validateEmail = (input) => {
      const value = input.value.trim();

      if (value === '') {
        showError(input, 'Поле Email обязательно для заполнения');
      } else if (!emailRegex.test(value)) {
        showError(input, 'Введите корректный Email');
      } else {
        hideError(input);
      }
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      inputs.forEach((input) => {
        if (input.name === 'phone') {
          validatePhone(input);
        } else if (input.name === 'email') {
          validateEmail(input);
        }
      });

      const isValid = Array.from(inputs).every(
        (input) => !input.classList.contains('error'),
      );
      if (isValid) {
        form.submit();
      }
    });

    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          input.parentElement.classList.remove('error');
          input.classList.remove('error');
        }
      });

      input.addEventListener('input', () => {
        if (input.value.trim() === '') {
          input.parentElement.classList.remove('error');
          input.classList.remove('error');
        }
      });

      input.addEventListener('focus', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName.toLowerCase() === 'label') {
          label.style.transition = 'opacity 0.3s, height 0.3s';
          label.style.opacity = '0';
          label.style.height = '0';
          label.style.overflow = 'hidden';
        }
      });

      input.addEventListener('blur', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName.toLowerCase() === 'label') {
          label.style.transition = 'opacity 0.3s, height 0.3s';
          label.style.opacity = '1';
          label.style.height = 'auto';
        }
      });
    });
  }
};

export { validateForm };
