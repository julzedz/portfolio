const formElement = document.querySelector('#form-element');
const email = formElement.elements.emaile;
const error = document.querySelector('.error');
const emailInput = email.value;
const Emailregex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
const errorMsg = 'Email should only contain lowercase letters.';

