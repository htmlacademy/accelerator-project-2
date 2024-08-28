// function validate(){
//   var form = document.querySelector("form__input--email");
//   var email = document.getElementById("email").value;
//   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

//   if(email.match(pattern))
//   {
//       form.classList.add("valid");
//       form.classList.remove("invalid");
//   }
//   else{
//       form.classList.remove("valid");
//       form.classList.add("invalid");
//   }
//   if (email == "") {
//       form.classList.remove("valid");
//       form.classList.remove("invalid");
//   }
// }


// document.addEventListener( "DOMContentLoaded" , function() {
// document.querySelector(".input").addEventListener("input", function() {
//   this.classList.toggle("invalid", !this.validity.valid);
// })
// });


const nameInput = document.querySelector('#phone');
const formItemName = document.querySelector('.form__input--email');
const formItemPhone = document.querySelector('.form__input--phone');
const phoneInput = document.querySelector('#email');
const form = document.querySelector('.form__position');
const formButton = document.querySelector('.form__position .form__button');

function validateName() {
  const namePattern = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
  if (!namePattern.test(nameInput.value)) {
    formItemPhone.classList.add('error');
    // insertTextNotification(formItemPhone, 'Пожалуйста, введите только номер телефона');
    return false;
  }
  nameInput.classList.remove('error');
  return true;
}

// function validatePhone() {
//   const phonePattern = /^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;
//   if (!phonePattern.test(phoneInput.value)) {
//     phoneInput.classList.add('error');
//     insertTextNotification(formItemName, 'Пожалуйста, введите только email');
//     return false;
//   }
//   phoneInput.classList.remove('error');
//   return true;
// }

// function insertTextNotification(el, text) {
//   const existingNotification = el.querySelector('p');
//   if (existingNotification) {
//     existingNotification.remove();
//   }

//   const notitficationElement = document.createElement('p');
//   notitficationElement.textContent = text;
//   el.appendChild(notitficationElement);
// }

export function vaildateForm() {

  formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const isValid = validateName() && validatePhone();
    if (isValid) {
      form.submit();
    }
  });
}
