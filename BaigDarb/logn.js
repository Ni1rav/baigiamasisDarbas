let attempts = 4;

const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username!== 'and123' || password!== 'and123') {
    attempts++;
    if (attempts >= 4) {
      errorMessage.style.display = 'block';
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 30000); // hide the error message after 30 seconds
    }
  } else {
    window.location.href = 'baigiamasis darbas.html';
  }
});