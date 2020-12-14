const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
})