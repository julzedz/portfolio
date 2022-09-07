// get modal element
let modal = document.querySelector('.modal')
// get open modal buttons
let modalBtns = document.querySelectorAll('.modal-btn');

modalBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = 'block';

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    })

  })
})
// get close buttons
let closeBtn = document.querySelector('#details-close');
let closeMobile = document.querySelector('#details-img');

// listen for clicks on the modalBtns
modalBtns.addEventListener('click', () => {
  modal.style.display = 'block';
})

// listen for close click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})

// listen for close click-mobile
closeMobile.addEventListener('click', () => {
  modal.style.display = 'none'
})

// listen for outside click
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
})

