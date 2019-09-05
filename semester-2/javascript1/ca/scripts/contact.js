// refer to question 4 before development starts for scope document
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var submit = document.getElementById('submitContact');

var firstNameError = document.getElementById('firstNameError');
var lastNameError = document.getElementById('lastNameError');
var phoneError = document.getElementById('phoneError');
var emailError = document.getElementById('emailError');


function check() {
    checkNames();
    checkPhone();
    checkEmail();
}

function checkNames() {
    if (firstName.value.length > 0) {
        firstNameError.style.display = 'none';
    } else {
        firstNameError.style.display = 'block';
    }

    if (lastName.value.length > 0) {
        lastNameError.style.display = 'none';
    } else {
        lastNameError.style.display = 'block';
    }
}
function checkPhone() {
    if (phone.value.match(/\d{3}[-.\s]\d{3}[-.\s]\d{4}/g)) {
        phoneError.style.display = 'none';
    } else {
        phoneError.style.display = 'block';
    }
}
function checkEmail() {
    if (email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }
}
