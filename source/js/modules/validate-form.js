const validateForm = () => {
  if (document.querySelector('form') && document.querySelector('input[type="tel"]') && document.querySelector('input[type="email"]')) {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const digitsOnlyRegex = /^\d+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.рф)?$/;

    const showError = (input) => {
      const parent = input.parentElement;
      parent.classList.add('error');
      input.classList.add('error');
    };

    const hideError = (input) => {
      const parent = input.parentElement;
      parent.classList.remove('error');
      input.classList.remove('error');
    };

    const validatePhone = (input) => {
      const value = input.value.trim();

      if (value === '') {
        showError(input);
      } else if (!digitsOnlyRegex.test(value)) {
        showError(input);
      } else {
        hideError(input);
      }
    };

    const validateEmail = (input) => {
      const value = input.value.trim();

      if (value === '') {
        showError(input);
      } else if (!emailRegex.test(value)) {
        showError(input);
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
      input.addEventListener('focus', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName.toLowerCase() === 'label') {
          label.style.display = 'none';
        }
        input.classList.add('show-placeholder');
      });

      input.addEventListener('blur', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName.toLowerCase() === 'label') {
          if (input.value.trim() === '') {
            label.style.display = 'block';
          }
        }
        input.classList.remove('show-placeholder');
        const parent = input.parentElement;
        parent.classList.remove('error');
        input.classList.remove('error');
      });

      input.addEventListener('input', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName.toLowerCase() === 'label') {
          if (input.value.trim() !== '') {
            label.style.display = 'none';
          } else if (document.activeElement !== input) {
            label.style.display = 'block';
          }
        }
      });

      const label = input.previousElementSibling;
      if (label && label.tagName.toLowerCase() === 'label') {
        if (input.value.trim() !== '') {
          label.style.display = 'none';
        }
      }
    });
  }
};

export { validateForm };
