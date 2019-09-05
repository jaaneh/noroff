// form validation
const formName = document.querySelector('#spxa-form-name');
const formEmail = document.querySelector('#spxa-form-email');
const formPhone = document.querySelector('#spxa-form-phone');
const formMsg = document.querySelector('#spxa-form-message');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const phoneError = document.querySelector('#phoneError');
const msgError = document.querySelector('#msgError');

const contactSendForm = document.querySelector('#contact-sendForm');
const contactSuccess = document.querySelector('#contact-success');
const actualForm = document.querySelector('#actualForm');
const contactHead = document.querySelector('#contactHeading')

contactSendForm.addEventListener('click', function(event) {
  // prevent form from actually being submitted
  event.preventDefault();
  // validate fields
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();

  // if all fields return true, display success message.
  if (validateName() && validateEmail() && validatePhone() && validateMessage()) {
    contactSuccess.style.display = 'block';
    actualForm.style.display = 'none';
    contactHead.style.display = 'none';
  } else {
    contactSuccess.style.display = 'none';
    actualForm.style.display = 'block';
    contactHead.style.display = 'block';
  }
})

function validateName() {
  if (formName.value === '') {
    nameError.style.display = 'block';
    return false;
  } else {
    nameError.style.display = 'none';
    return true;
  }
}

function validateEmail() {
  if (formEmail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.style.display = 'none';
    return true;
  } else {
    emailError.style.display = 'block';
    return false;
  }
}

function validatePhone() {
  if (formPhone.value.match(/\d{3}[-.\s]\d{3}[-.\s]\d{4}/g)) {
    phoneError.style.display = 'none';
    return true;
  } else {
    phoneError.style.display = 'block';
    return false;
  }
}

function validateMessage() {
  if (formMsg.value.length >= 50) {
    msgError.style.display = 'none';
    return true;
  } else {
    msgError.style.display = 'block';
    return false;
  }
}


/*
- Add/remove background to navbar on scroll.
- Add/remove 'nav-active' css class on scroll.
- Add/remove 'nav-animation' css class on scroll. 
  - This gets rid of the hover animation on top nav unless the page is scrolled down >= 200.
*/
const navbar = document.querySelector('.navbar');
const activeNav = document.querySelector('#activeNav');
const navAnim = document.querySelectorAll('.nav-link');

function stickyNavigation() {
  if (window.scrollY >= 200) {
    navbar.classList.add('navbarScrolled');
    navbar.classList.remove('navbarNotScrolled');
    activeNav.classList.add('nav-active');
    for(var i = 0; i < navAnim.length; i++) {
      navAnim[i].classList.add('nav-animation')
    }
  } else {
    navbar.classList.add('navbarNotScrolled');
    navbar.classList.remove('navbarScrolled');
    activeNav.classList.remove('nav-active');
    for(var i = 0; i < navAnim.length; i++) {
      navAnim[i].classList.remove('nav-animation')
    }
  }
}

window.addEventListener('scroll', stickyNavigation);