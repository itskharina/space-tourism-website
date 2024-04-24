const links = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const buttonsContainer = document.querySelector('.buttons');
const buttons = document.querySelectorAll('button');

const technologyName = document.querySelector('h2');
const description = document.querySelector('p');
const image = document.querySelector('img.tech-photo');

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
      button.classList.remove('active-button');
    });
  }
  e.target.classList.add('active-button');

  changeInfo(e);
});

const fetchData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  console.log(data);
  return data;
};

const changeInfo = async (e) => {
  const data = await fetchData();
  const technology = data.technology;

  switch (e.target.id) {
    case 'button-one':
      image.src = technology[0].images.portrait;
      technologyName.textContent = technology[0].name;
      description.textContent = technology[0].description;
      break;

    case 'button-two':
      image.src = technology[1].images.portrait;
      technologyName.textContent = technology[1].name;
      description.textContent = technology[1].description;
      break;

    case 'button-three':
      image.src = technology[2].images.portrait;
      technologyName.textContent = technology[2].name;
      description.textContent = technology[2].description;
      break;
  }
};
