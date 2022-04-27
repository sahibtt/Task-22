let Username = document.getElementById('username');
let Email = document.getElementById('email');
let password = document.getElementById('pwd');
let btnSubmit = document.querySelector('.btnSubmit')
let usernameErr = document.getElementById('username-err');
let emailErr = document.getElementById('email-err');
let passwordErr = document.getElementById('pwd-err');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

Username.addEventListener('focus', () => {
    Username.nextElementSibling.style.visibility = 'hidden';
    Username.style.border = '1px solid #ced4da';
    Username.nextElementSibling.nextElementSibling.textContent = '';
});

Email.addEventListener('focus', () => {
    Email.nextElementSibling.style.visibility = 'hidden';
    Email.style.border = '1px solid #ced4da';
    Email.nextElementSibling.nextElementSibling.textContent = '';
});

password.addEventListener('focus', () => {
    password.nextElementSibling.style.visibility = 'hidden';
    password.style.border = '1px solid #ced4da';
    password.nextElementSibling.nextElementSibling.textContent = '';
});

usernameIncorrect = () => {
    usernameErr.textContent = 'Incorrect Username';
    usernameErr.style.color = 'crimson';
    Username.style.border = '1px solid crimson';
    Username.nextElementSibling.style.visibility = 'visible';
}

emailIncorrect = () => {
    emailErr.textContent = 'Incorrect Email';
    emailErr.style.color = 'crimson';
    Email.style.border = '1px solid crimson';
    Email.nextElementSibling.style.visibility = 'visible';
}

incorrectPassword = () => {
    passwordErr.textContent = 'Incorrect password';
    passwordErr.style.color = 'crimson';
    password.style.border = '1px solid crimson';
    password.nextElementSibling.style.visibility = 'visible';

}



btnSubmit.addEventListener('click' , () => {
    if (Username.value.length >= 6 && Email.value.match(mailformat) && password.value.length >= 6) {
        alert('Successfully registered');
    }else{
        if (Username.value.length < 6) {
            usernameIncorrect();
        }
        if (!Email.value.match(mailformat)) {
            emailIncorrect();
        }
        if (password.value.length < 6) {
            incorrectPassword();
        }
    }
});