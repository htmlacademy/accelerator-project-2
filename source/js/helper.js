// Функция для определения операционной системы
function getOS() {
  // const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

  if (macosPlatforms.indexOf(platform) !== -1) {
      return 'MacOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
      return 'Windows';
  } else {
      return 'Unknown';
  }
}

// Функция для проверки мобильного разрешения
function isMobile() {
  return window.innerWidth <= 320; // Пример мобильного разрешения
}

// Применение стилей в зависимости от ОС и разрешения
function applyStyles() {
  const os = getOS();
  const galleryTitle = document.querySelector('.gallery__title');

  if (galleryTitle && isMobile()) {
      if (os === 'Windows') {
          galleryTitle.style.paddingTop = '17px';
          galleryTitle.style.paddingBottom = '16px';
      }
  }
}

// Вызов функции при загрузке страницы и при изменении размера окна
window.addEventListener('load', applyStyles);
window.addEventListener('resize', applyStyles);
