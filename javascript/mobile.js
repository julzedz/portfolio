var menuItem = document.querySelector('.menu-item');
var close = document.querySelector('.close');
var openMenu = document.querySelector('.hamburger');

function displayMenu(){
  menuItem.classList.toggle('visible');
  close.style.display= 'flex';
}

function closeMenu(){
  menuItem.style.top= '-200%';
  close.style.display= 'none';
}

openMenu.addEventListener('click',displayMenu);
close.addEventListener('click',closeMenu);