const menuButton = document.querySelector('.header__menu-button');
const menuList = document.querySelector('.header__list');
const body = document.querySelector('.page-body');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.classList.contains('header__menu-button--open');

  // Переключаем классы кнопки
  menuButton.classList.toggle('header__menu-button--open', !isOpen);
  menuButton.classList.toggle('header__menu-button--close', isOpen);

  // Переключаем класс у списка
  menuList.classList.toggle('header__list--open', isOpen);
});

menuButton.addEventListener('click', () => {
  // Проверяем, есть ли у кнопки нужный класс
  if (menuButton.classList.contains('header__menu-button--close')) {
    body.classList.add('page-body--menu-open');
  } else {
    body.classList.remove('page-body--menu-open');
  }
});
