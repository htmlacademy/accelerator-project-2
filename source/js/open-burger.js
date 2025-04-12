const menuButton = document.querySelector('.header__menu-button');
const menuList = document.querySelector('.header__list');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.classList.contains('header__menu-button--open');

  // Переключаем классы кнопки
  menuButton.classList.toggle('header__menu-button--open', !isOpen);
  menuButton.classList.toggle('header__menu-button--close', isOpen);

  // Переключаем класс у списка
  menuList.classList.toggle('header__list--open', isOpen);
});

