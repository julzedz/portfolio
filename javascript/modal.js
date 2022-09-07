const cardData = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/'
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/'
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/'
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/'
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/'
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/'
  }
];

// get modal element
let modal = document.querySelector('.modal');
// get open modal buttons
let modalBtns = document.querySelectorAll('.modal-btn');
// get close buttons
let closeBtn = document.querySelector('#details-close');
let closeMobile = document.querySelector('#details-img');

// listen for clicks on the modalBtns
modalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    
    modal.style.display = 'block';
  })
})

// listen for close click
closeBtn.addEventListener('click',() => {
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

// get the button class
// loop on the array 
// use loop to change inner.HTML of the modal elements.
