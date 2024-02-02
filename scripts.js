var typed = new Typed(".text", {
    strings: ["OSS Developer", "Open Source Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function hire_me() {
    alert('Please fill the below form!')
}

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Full Name';
        return false;
    }

    nameError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }

    emailError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = '10 Digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits';
        return false;
    }


    phoneError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' More characters required';
        return false;
    }

    messageError.innerHTML = "<i class='bx bxs-check-circle' style='margin-left: 90px'></i>";
    return true
}

function validateForm() {
    if (!validateName() && !validateEmail() && !validatePhone() && !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Above fields are required';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }

    alert('Form Submitted Successfully!')
    return true;
}