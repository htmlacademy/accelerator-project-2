const burger = document.querySelector('.header__button');
const menu = document.querySelector('.header__nav-wrapper');
const menuLinks = document.querySelectorAll('.header__nav-link');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

menuLinks.forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = 'auto';
  })
);
