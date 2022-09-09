const formElement = document.querySelector('#form-element');
const email = document.querySelector('#emaile');
const error = document.querySelector('.error'
const errorMsg = 'Email should only contain lowercase letters.';
const Emailregex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

formElement.addEventListener('submit', (e) => {
  const emailInput = email.value;
  if (emailInput.match(Emailregex)) {
    error.style.display = 'none';
    return true;
  }
  e.preventDefault();
  error.style.display = 'block';
  error.innerHTML = errorMsg;
  return false;
});