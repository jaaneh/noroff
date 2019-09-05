const submitForm = document.getElementById('submitForm');
const formName = document.getElementById('form_name');
const formEmail = document.getElementById('form_email');
const formPhone = document.getElementById('form_phone');
const formMessage = document.getElementById('form_message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const msgError = document.getElementById('messageError');

submitForm.addEventListener('click', function(event) {
  event.preventDefault();
  checkName();
  checkEmail();
  checkPhone();
  checkMessage();
})

// Checks if something has been entered in name field.
checkName = () => {
  if (formName.value.length > 0) {
    nameError.style.display = 'none';
  } else {
    nameError.style.display = 'block';
  }
}

/*
Supports formats such as

firstlast@domain.co
first.last@ext-domain.io
first_last@sub.domain.com
first-last@domain.net

etc etc.
*/
checkEmail = () => {
  if (formEmail.value.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g)) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }
}

/*
Supports these formats

888 888 8888
888-888-8888
888.888.8888
8888888888

With ? after both [-.\s] it supports 'any or none' of the characters inside [].
*/
checkPhone = () => {
  if (formPhone.value.match(/^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/g)) {
    phoneError.style.display = 'none';
  } else {
    phoneError.style.display = 'block';
  }
}

// Requires 50 or more characters in the message text box.
checkMessage = () => {
  if (formMessage.value.length >= 50) {
    msgError.style.display = 'none';
  } else {
    msgError.style.display = 'block';
  }
}