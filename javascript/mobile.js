const hamburger = document.querySelector('#hamburger-toggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.nav-icon');
const close = document.querySelector('.close');

hamburger.addEventListener('click', (e) => {
  nav.classList.toggle('open');
  e.preventDefault();
  close.classList.toggle('visible');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});
