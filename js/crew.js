const links = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const buttonsContainer = document.querySelector('.buttons');
const buttons = document.querySelectorAll('button');

const crewPhoto = document.querySelector('.picture img');
const role = document.querySelector('.job-title');
const fullName = document.querySelector('.name');
const bio = document.querySelector('.description');

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.forEach((link) => {
      link.classList.remove('active');
    });
  }
  e.target.classList.add('active');
});

buttonsContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
  }
  e.target.classList.add('active');

  changeInfo(e);
});

const fetchData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  // console.log(data);
  return data;
};

// fetchData();

const changeInfo = async (e) => {
  const data = await fetchData();
  const crew = data.crew;
  // console.log(crew);

  switch (e.target.id) {
    case 'circle-one':
      crewPhoto.src = crew[0].images.png;
      crewPhoto.style.right = '220px';
      role.textContent = crew[0].role;
      fullName.textContent = crew[0].name;
      bio.textContent = crew[0].bio;
      break;

    case 'circle-two':
      crewPhoto.src = crew[1].images.png;
      crewPhoto.style.right = '300px';
      role.textContent = crew[1].role;
      fullName.textContent = crew[1].name;
      bio.textContent = crew[1].bio;
      break;

    case 'circle-three':
      crewPhoto.src = crew[2].images.png;
      role.textContent = crew[2].role;
      crewPhoto.style.right = '220px';
      fullName.textContent = crew[2].name;
      bio.textContent = crew[2].bio;
      break;

    case 'circle-four':
      crewPhoto.style.right = '220px';
      crewPhoto.src = crew[3].images.png;
      role.textContent = crew[3].role;
      fullName.textContent = crew[3].name;
      bio.textContent = crew[3].bio;
      break;
  }
};
