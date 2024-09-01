const burgerButton = document.querySelector('.header__toggle');
const mainHeader = document.querySelector('.header');
const body = document.querySelector('.page-body');

const toggleBurgerMenu = () => {

  if (burgerButton) {
    burgerButton.addEventListener('click', () => {
      body.classList.toggle('lock');
      burgerButton.classList.toggle('is-open');
      mainHeader.classList.toggle('is-open');
    });
  }
};

// Прокрутка при клике

const navLinks = document.querySelectorAll('.nav__link[data-scroll]');

const onNavLinkClick = (e) => {
  const navLink = e.target;

  if (navLink.dataset.scroll && document.querySelector(navLink.dataset.scroll)) {
    const scrollBlock = document.querySelector(navLink.dataset.scroll);
    const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    if (burgerButton.classList.contains('is-open')) {
      body.classList.remove('lock');
      burgerButton.classList.remove('is-open');
      mainHeader.classList.remove('is-open');
    }

    window.scrollTo({
      top: scrollBlockValue,
      behavior: 'smooth'
    });

    e.preventDefault();
  }
};

const scrollToPageBlock = () => {
  if (navLinks.length > 0) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', onNavLinkClick);
    });
  }
};

export { toggleBurgerMenu, scrollToPageBlock };
