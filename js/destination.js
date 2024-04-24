const headerLinks = document.querySelectorAll('nav a');
const headerNav = document.querySelector('nav');
const mainLinks = document.querySelectorAll('.labels a');
const mainNav = document.querySelector('.labels');

const button = document.querySelector('.hamburger');
const buttonImage = document.querySelector('.hamburger img');

const title = document.querySelector('.description h2');
const description = document.querySelector('.description p');
const planetPhoto = document.querySelector('.planet img');
const distance = document.querySelector('.distance p');
const travel = document.querySelector('.time p');

headerNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    headerLinks.forEach((link) => {
      link.classList.remove('active');
    });
  }
  e.target.classList.add('active');
});

mainNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mainLinks.forEach((link) => {
      link.classList.remove('active');
    });
  }
  e.target.classList.add('active');

  changeInfo(e);
});

button.addEventListener('click', () => {
  if (window.innerWidth <= 680) {
    if (headerNav.style.display === 'block') {
      headerNav.style.display = 'none';
      buttonImage.src = './assets/shared/icon-hamburger.svg';
    } else {
      headerNav.style.display = 'block';
      headerNav.style.height = document.documentElement.scrollHeight + 'px';
      buttonImage.src = './assets/shared/icon-close.svg';
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 680) {
    headerNav.style.display = 'flex';
    headerNav.style.height = '96px';
  } else if (window.innerWidth < 680 && headerNav.style.display === 'block') {
    headerNav.style.display = 'block';
  } else {
    headerNav.style.display = 'none';
    buttonImage.src = './assets/shared/icon-hamburger.svg';
  }
});

const fetchData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
};

const changeInfo = async (e) => {
  const data = await fetchData();
  const destinations = data.destinations;
  console.log(destinations);

  switch (e.target.textContent) {
    case 'Moon':
      console.log('moon');
      planetPhoto.src = destinations[0].images.png;
      title.textContent = destinations[0].name;
      description.textContent = destinations[0].description;
      distance.textContent = destinations[0].distance;
      travel.textContent = destinations[0].travel;
      break;

    case 'Mars':
      console.log('mars');
      planetPhoto.src = destinations[1].images.png;
      title.textContent = destinations[1].name;
      description.textContent = destinations[1].description;
      distance.textContent = destinations[1].distance;
      travel.textContent = destinations[1].travel;
      break;

    case 'Europa':
      console.log('europa');
      planetPhoto.src = destinations[2].images.png;
      title.textContent = destinations[2].name;
      description.textContent = destinations[2].description;
      distance.textContent = destinations[2].distance;
      travel.textContent = destinations[2].travel;
      break;

    case 'Titan':
      console.log('Titan');
      planetPhoto.src = destinations[3].images.png;
      title.textContent = destinations[3].name;
      description.textContent = destinations[3].description;
      distance.textContent = destinations[3].distance;
      travel.textContent = destinations[3].travel;
      break;
  }
};
