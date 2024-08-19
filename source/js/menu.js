const mainNav = document.querySelector('.header__nav-wrapper');
const navToggle = document.querySelector('.header__button');
const navLinks = document.querySelectorAll('.header__nav-link');

export function clickMenu() {
  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      document.body.style.overflow = 'hidden';
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
      document.body.style.overflow = 'auto';
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('main-nav--opened')) {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        document.body.style.overflow = 'auto';
      }
    });
  });
}
