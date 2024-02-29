const email = document.querySelector('#email');

email.addEventListener('blur', checkEmail);

/* check if the email is valid */
function checkEmail() {
    let emailValue = email.value;
    let emailPattern = /^[^@\s]+@byui\.edu$/;
    
    if (!emailPattern.test(emailValue)) {
        email.setCustomValidity('Invalid email address');
        email.style.backgroundColor = '#fff0f3';
    } else {
        email.setCustomValidity('');
        email.style.backgroundColor = '#fff';
    }
}
