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

// to close menu when item is clicked
const lists = document.querySelector('.menu-item');
const spreadList = [...lists.children];
spreadList.forEach((list) => {
  list.addEventListener('click', () => {
    nav.classList.toggle('open');
    close.style.display = 'none';
  });
});