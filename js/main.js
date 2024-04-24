const links = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const button = document.querySelector('.hamburger');
const buttonImage = document.querySelector('.hamburger img');

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.forEach((link) => {
      link.classList.remove('active');
    });
  }
  e.target.classList.add('active');
});

button.addEventListener('click', () => {
  if (window.innerWidth <= 560) {
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
      buttonImage.src = './assets/shared/icon-hamburger.svg';
    } else {
      nav.style.display = 'block';
      nav.style.height = document.documentElement.scrollHeight + 'px';
      buttonImage.src = './assets/shared/icon-close.svg';
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 560) {
    nav.style.display = 'flex';
    nav.style.height = '96px';
  } else if (window.innerWidth < 560 && nav.style.display === 'block') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
    buttonImage.src = './assets/shared/icon-hamburger.svg';
  }
});
