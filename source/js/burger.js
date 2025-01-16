
const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__nav-toggle');
const siteList = document.querySelector('.header__list');
const body = document.querySelector('.page__body');

// Инициализация состояния меню
navMain.classList.add('header__nav--closed');

// Обработчик клика на кнопку меню
navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Закрытие меню при выборе пункта
siteList.addEventListener('click', (event) => {
  if (event.target.classList.contains('site-list__link')) {
    closeMenu();
  }
});

// Функция для открытия меню
function openMenu() {
  navMain.classList.remove('header__nav--closed');
  navMain.classList.add('header__nav--opened');
  navToggle.classList.add('header__nav-toggle--close');
  navToggle.classList.remove('header__nav-toggle--open');
  body.classList.add('page__body--with-overlay');
  createOverlay();
}

// Функция для закрытия меню
function closeMenu() {
  navMain.classList.add('header__nav--closed');
  navMain.classList.remove('header__nav--opened');
  navToggle.classList.remove('header__nav-toggle--close');
  navToggle.classList.add('header__nav-toggle--open');
  body.classList.remove('page__body--with-overlay');
  removeOverlay();
}

// Создание оверлея
function createOverlay() {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.addEventListener('click', () => {
    closeMenu(); // Закрываем меню при клике на оверлей
  });
  document.body.appendChild(overlay);
}

// Удаление оверлея
function removeOverlay() {
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.remove();
  }
}
