const form = document.querySelector(".form-sending");
const phoneInput = form.querySelector(".phone-form-field");
const mailInput = form.querySelector(".mail-form-field");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const phone = phoneInput.value;
  const mail = mailInput.value;
  if (!phone || !mail) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  if (isNaN(+phone)) {
    phoneInput.style.borderColor = "#FF121F";
    alert("Пожалуйста, введите номер телефона корректно");
    return;
  }

  form.submit();
});
