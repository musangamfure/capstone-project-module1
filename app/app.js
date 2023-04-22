const dynamicspeakers = [
  {
    id: 1,
    url: './images/speakers/businessman.PNG',
    name: 'Ali Morshedlou',
    position: 'CEO',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    id: 2,
    url: './images/speakers/david-mumma.jpg',
    name: 'David Mumma',
    position: 'Software Engineer',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    id: 3,
    url: '/images/speakers/happy.PNG',
    name: 'Gift Habeshaw',
    position: 'Full-Stack Developer',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    id: 4,
    url: './images/speakers/professionalwoman.PNG',
    name: 'Christina Wocinte',
    position: 'CEO',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    id: 5,
    url: './images/speakers/cheerfulwoman.PNG',
    name: 'Elin Tabitha',
    position: 'Senior Softwore Engineer',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae.',
  },
  {
    id: 6,
    url: './images/speakers/smartlook.PNG',
    name: 'Juan Enclada',
    position: 'Senior Developer',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
];

const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');
const menuLink = document.querySelectorAll('.menu-list__item');
const menucontainer = document.querySelector('.lower-nav__center');
const featuredSpeakers = document.getElementById('all-speakers');
const seeMore = document.querySelector('.feature-speakers__see-more');
const seeLess = document.querySelector('.feature-speakers__see-less');
const links = document.querySelectorAll('a');
const url = window.location.href;

openHam.addEventListener('click', () => {
  menucontainer.classList.toggle('hide');
  openHam.classList.add('hide');
  closeHam.classList.remove('hide');
});

closeHam.addEventListener('click', () => {
  menucontainer.classList.toggle('hide');
  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
});

menuLink.forEach((link) => link.addEventListener('click', () => {
  menucontainer.classList.add('hide');
  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
}));

const renderspeakers = function () {
  for (let i = 0; i < dynamicspeakers.length; i += 1) {
    featuredSpeakers.innerHTML += `
    <div class="feature-speakers__card" >
    <div class="container">
    <div class="img-holder">
     <img
    class='square-patern'
    src="./images/home/empty-chessboard-svgrepo-com.svg"
    alt='cheese-bg'
  />
    <img src=${dynamicspeakers[i].url} alt=${dynamicspeakers[i].name} class="speaker-img">
     </div>
    <div class="feature-speakers__card-details">
        <h3 class="feature-speakers__card-details-name">${dynamicspeakers[i].name}</h3>
        <p class="feature-speakers__card-details-info">${dynamicspeakers[i].position}</p>
        <p class="feature-speakers__card-details-about">${dynamicspeakers[i].about}</p>
    </div>
    </div>
     
  </div>
          `;
  }
};

window.addEventListener('load', renderspeakers);

let currentItems = 2;

seeMore.addEventListener('click', () => {
  const speakersdata = [
    ...document.querySelectorAll('.feature-speakers__card'),
  ];

  for (let i = currentItems; i < speakersdata.length; i += 1) {
    speakersdata[i].style.display = 'grid';
  }

  currentItems += 4;

  if (currentItems >= speakersdata.length) {
    seeMore.style.display = 'none';
    seeLess.classList.remove('hide');
  }
});

seeLess.addEventListener('click', () => {
  const speakersdata = [
    ...document.querySelectorAll('.feature-speakers__card'),
  ];

  for (let i = 2; i < speakersdata.length; i += 1) {
    speakersdata[i].style.display = 'none';
  }

  currentItems -= 4;

  if (currentItems <= 2) {
    seeMore.style.display = 'grid';
    seeLess.classList.add('hide');
  }
});

links.forEach((link) => {
  if (link.href === url) link.id = 'active-link';
});
