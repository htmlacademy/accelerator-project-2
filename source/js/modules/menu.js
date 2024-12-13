/*сюда добалвяют скрипт*/
const navMain = document.querySelector('.main-header__container');
const navToggle = document.querySelector('.main-header__toggle');
const body = document.querySelector('.page-body');

const menuToggle = () => {
  navToggle.onclick = function () {
    navMain.classList.toggle('main-header__container--opened');
    body.classList.toggle('page-body--no-scroll');
  };
};

export { menuToggle };
