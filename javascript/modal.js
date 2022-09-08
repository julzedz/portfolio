const cardData = [
  {
    name: 'Multi-Post Stories Gain + Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    imgMobile: './pics/Snapshoot-Portfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain + Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    imgMobile: './pics/Snapshoot-Portfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain + Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    imgMobile: './pics/Snapshoot-Portfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain + Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    imgMobile: './pics/Snapshoot-Portfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain + Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    imgMobile: './pics/Snapshoot-Portfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/',
  },
  {
    name: 'Multi-Post Stories Gain + Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    image: './pics/SnapshootDesktopPortfolio.svg',
    imgMobile: './pics/Snapshoot-Portfolio.svg',
    linkLive: 'https://julzedz.github.io/',
    linkSource: 'https://julzedz.github.io/',
  },
];

// get modal element
const modal = document.querySelector('.modal');
// get open modal buttons
const modalBtns = document.querySelectorAll('.modal-btn');

// listen for clicks on the modal Btns
modalBtns.forEach((btn, index) => {
  let modalContent = '';
  let li = '';
  const ulArr = cardData[index].technologies;
  for (let i = 0; i < ulArr.length; i += 1) {
    li += `<li>${ulArr[i]}</li>`;
  }
  btn.addEventListener('click', () => {
    modalContent = ` 
    <div class="details">
      <img id="details-close" src="./pics/Disabled.svg" alt="close button">
      <img id="details-img" src="${cardData[index].imgMobile}" alt="project image">
      <img id="details-img-desktop" src="${cardData[index].image}" alt="project image">

      <div class='btn-title'>
        <h2 id="details-title" class="details-hgroup">
          ${cardData[index].name}
        </h2>
        <div class="details-buttons initial-button">
        <button type="submit"> <a href="${cardData[index].linkLive}"> See Live <img src="./pics/Icon-Export.svg" alt="export icon"></a>
        </button>
        <button type="submit"> <a href="${cardData[index].linkSource}">See Source <img src="./pics/Icon-GitHub.svg" alt="github image"></a>
        </button>
      </div>
      </div>

      <ul class="courses" id="details-courses">
        ${li}
        </ul>
      <p id="details-text">
        ${cardData[index].description}
      </p>
      <div class="details-buttons last-button">
        <button type="submit"> <a href="${cardData[index].linkLive}"> See Live <img src="./pics/Icon-Export.svg" alt="export icon"></a>
        </button>
        <button type="submit"> <a href="${cardData[index].linkSource}">See Source <img src="./pics/Icon-GitHub.svg" alt="github image"></a>
        </button>
      </div>
    </div>`;

    modal.innerHTML = modalContent;
    modal.style.display = 'block';

    // get close buttons
    const closeBtn = document.querySelector('#details-close');
    const closeMobile = document.querySelector('#details-img');
    // listen for close click
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    closeMobile.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
});

// listen for outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
