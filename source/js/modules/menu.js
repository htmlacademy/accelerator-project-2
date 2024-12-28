const navMain = document.querySelector('.main-header__wrapper');
const navToggle = document.querySelector('.main-header__toggle');
const body = document.querySelector('.page-body');
const navLinks = document.querySelectorAll('.main-header__link');
const isEscapeKey = (evt) => evt.key === 'Escape';

const menuToggle = () => {
  navToggle.onclick = function () {
    navMain.classList.toggle('main-header__wrapper--opened');
    body.classList.toggle('page-body--no-scroll');
  };

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      navMain.classList.remove('main-header__wrapper--opened');
      body.classList.remove('page-body--no-scroll');
    }
  });
};

const navLinkToggle = () => {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
      navMain.classList.remove('main-header__wrapper--opened');
      body.classList.remove('page-body--no-scroll');
    });
  }
};

export { menuToggle, navLinkToggle };
