const formElement = document.querySelector('#form-element');
const email = document.querySelector('#emaile');
const error = document.querySelector('.error');
const errorMsg = 'Email should only contain lowercase letters.';
const Emailregex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

const formInfo = {
  fullName: document.querySelector('.full.name').value,
  emailAddress: document.querySelector('#email').value,
  textArea: document.querySelector('#text-area').value
}

formElement.addEventListener('submit', (e) => {
  const emailInput = email.value;
  if (emailInput.match(Emailregex)) {
    error.style.display = 'none';
    localStorage.setItem('data', JSON.stringify(formInfo));

    return true;
  }
  e.preventDefault();
  error.style.display = 'block';
  error.innerHTML = errorMsg;
  return false;
});

let getFormInfo = localStorage.getItem('data');
getFormInfo = JSON.parse(getFormInfo);
console.log(getFormInfo)