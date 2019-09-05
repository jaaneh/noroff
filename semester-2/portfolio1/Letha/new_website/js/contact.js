// form select based on product
$(document).ready(function() {
  var url = new URL(document.location);
  var param = url.searchParams;
  var name = param.get("name");

  $("#contactSel").val(name);
});

// contact form validation
const submitForm = document.getElementById('submitForm');
const formName = document.getElementById('form_name');
const nameError = document.getElementById('nameError');
const formEmail = document.getElementById('form_email');
const emailError = document.getElementById('emailError');
const formPhone = document.getElementById('form_phone');
const phoneError = document.getElementById('phoneError');
const formMessage = document.getElementById('form_message');
const msgError = document.getElementById('messageError');

submitForm.addEventListener('click', function(event) {
  event.preventDefault();
  checkName();
  checkEmail();
  checkPhone();
  checkMessage();
  checkAll();
})

checkName = () => {
  if (formName.value.length > 0) {
    nameError.style.display = 'none';
    return true;
  } else {
    nameError.style.display = 'block';
  }
}

checkEmail = () => {
  if (formEmail.value.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g)) {
    emailError.style.display = 'none';
    return true;
  } else {
    emailError.style.display = 'block';
  }
}

checkPhone = () => {
  if (formPhone.value.match(/^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/g)) {
    phoneError.style.display = 'none';
    return true;
  } else {
    phoneError.style.display = 'block';
  }
}

checkMessage = () => {
  if (formMessage.value.length >= 50) {
    msgError.style.display = 'none';
    return true;
  } else {
    msgError.style.display = 'block';
  }
}

checkAll = () => {
  if (checkName() && checkEmail() && checkPhone() && checkMessage()) {
    window.location.href="./contact_success.html"
  } else {
    console.log('Missing field(s)');
  }
}