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

checkName = () => {
  if (formName.value.length > 0) {
    nameError.style.display = 'none';
  } else {
    nameError.style.display = 'block';
  }
}

checkEmail = () => {
  if (formEmail.value.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g)) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }
}


checkPhone = () => {
  if (formPhone.value.match(/^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/g)) {
    phoneError.style.display = 'none';
  } else {
    phoneError.style.display = 'block';
  }
}

checkMessage = () => {
  if (formMessage.value.length > 50) {
    msgError.style.display = 'none';
  } else {
    msgError.style.display = 'block';
  }
}