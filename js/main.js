const links = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.forEach((link) => {
      link.classList.remove('active');
    });
  }
  e.target.classList.add('active');
});
