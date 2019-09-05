//Use RegEx to validate form
var number = document.getElementById('number');
var email = document.getElementById('email');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');

function check() {
    checkNames();
    validateNumber();
    validateEmail();
}

function checkNames() {
    if (firstname.value.length > 0) {
        document.getElementById('firstNameRes').innerHTML = 'First name valid.';
    } else {
        document.getElementById('firstNameRes').innerHTML = '<strong>First name invalid.</strong>';
    }

    if (lastname.value.length > 0) {
        document.getElementById('lastNameRes').innerHTML = 'Last name valid.';
    } else {
        document.getElementById('lastNameRes').innerHTML = '<strong>Last name invalid.</strong>';
    }
}

   
function validateNumber() {
    // Check if phone number consit of 6 digits or more.
    if (form.number.value.match(/^\d{6,}$/)) {
        document.getElementById('numberRes').innerHTML = 'Phone number valid.';
    } else {
        document.getElementById('numberRes').innerHTML = '<strong>Phone number invalid.</strong>';
    }
}

function validateEmail() {
    // Check if email input is in 'a@aa.aa' format.
    if (form.email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        document.getElementById('emailRes').innerHTML = 'Email address valid.';
    } else {
        document.getElementById('emailRes').innerHTML = '<strong>Email address invalid.</strong>';
    }
}
