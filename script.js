const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
})