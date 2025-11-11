/* https://swiperjs.com/get-started#installation */

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

/* Кнопка меню */
const menuToggle = document.querySelector('.header__toggle');
const overlay = document.querySelector('.main__overlay');
const menuItems = document.querySelectorAll('.nav-item__link');
menuToggle.onclick = function () {
  menuToggle.classList.toggle('header__toggle--closed');
  menuToggle.classList.toggle('header__toggle--opened');
  overlay.classList.toggle('active');
};
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    overlay.classList.remove('active');
    menuToggle.classList.add('header__toggle--closed');
    menuToggle.classList.remove('header__toggle--opened');
  });
});

/* Слайдер промоблока */
let swiperHero = null;

function initHeroSwiper() {
  swiperHero = new Swiper('.hero-swiper', {
    modules: [Pagination],
    speed: 400,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      renderBullet: (index, className) => `<span class="${className}" tabindex="0" role="button"></span>`,
    },
    breakpoints: {
      0: {
        allowTouchMove: true,
        pagination: {
          clickable: false,
        },
      },
      1440: {
        allowTouchMove: false,
        pagination: {
          clickable: true,
        },
      },
    },
    on: {
      slideChange: updateTabIndexes,
      init: updateTabIndexes,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}

/* переход между слайдами с помощью буллетов по пробелу*/
document.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.code === 'Space' || event.code === 'Enter') {
    const activeBullet = document.activeElement;

    if (activeBullet && activeBullet.classList.contains('swiper-pagination-bullet')) {
      event.preventDefault();

      const bulletIndex = [...activeBullet.parentElement.children].indexOf(activeBullet);

      swiperHero.slideTo(bulletIndex);
      updateTabIndexes();
    }
  }
});
initHeroSwiper();

/* запрещаем переход табом для ссылок на невидимых слайдах */
function updateTabIndexes() {
  const slides = document.querySelectorAll('.hero-item');

  slides.forEach((slide) => {
    const isVisible = slide.classList.contains('swiper-slide-active');
    const links = slide.querySelectorAll('a');
    links.forEach((link) => {
      if (isVisible) {
        link.setAttribute('tabindex', '0');
      } else {
        link.setAttribute('tabindex', '-1');
      }
    });
  });
}
updateTabIndexes();

/* Добавляем прокрутку слайдов клавишами */
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    swiperHero.slideTo(swiperHero.activeIndex - 1);
    updateTabIndexes();
  } else if (event.key === 'ArrowRight') {
    swiperHero.slideTo(swiperHero.activeIndex + 1);
    updateTabIndexes();
  }
});

/* Слайдер туров */
const swiperTours = new Swiper('.tours-swiper', {
  modules: [Navigation],
  speed: 400,
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.tours-swiper__button--next',
    prevEl: '.tours-swiper__button--prev',
  },
});

/* слайдер тренеров */
const swiperTrainers = new Swiper('.training-swiper', {
  modules: [Navigation],
  speed: 400,
  spaceBetween: 15,
  loop: false,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 2
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.training-swiper__button--next',
    prevEl: '.training-swiper__button--prev',
  },
});

/* слайдер отзывов */
const swiperReviews = new Swiper('.reviews-swiper', {
  modules: [Navigation],
  speed: 400,
  spaceBetween: 15,
  loop: false,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120
    }
  },
  navigation: {
    nextEl: '.reviews-swiper__button--next',
    prevEl: '.reviews-swiper__button--prev',
  },
});

/* слайдер преимуществ */
let swiperAdv = null;

function initAdvSwiper() {

  if (window.innerWidth >= 1440) {

    /* добавляем слайды для корректного отображения*/
    const advList = document.querySelector('.adv-swiper__list');
    const advSlides = document.querySelectorAll('.adv-swiper__item');
    advSlides.forEach((slide) => {
      advList.appendChild(slide.cloneNode(true));
    });

    /* создаем сам слайдер */
    if (!swiperAdv) {
      swiperAdv = new Swiper('.adv-swiper', {
        modules: [Navigation],
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerGroup: 2,
        initialSlide: 2,
        navigation: {
          nextEl: '.adv-swiper__button--next',
          prevEl: '.adv-swiper__button--prev',
        },
      });
    }
  } else {

    /* уничтожаем слайдер */
    if (swiperAdv) {
      swiperAdv.destroy(true, true);
      swiperAdv = null;
    }

    /* убираем слайды после пятого */
    const advList = document.querySelector('.adv-swiper__list');
    const advItems = advList.children;
    for (let i = advItems.length - 1; i >= 5; i--) {
      advList.removeChild(advItems[i]);
    }
  }
}

initAdvSwiper();

/* слайдер галереи */
let swiperGallery = null;

function initGallerySwiper() {
  if (window.innerWidth < 1440) {
    swiperGallery = new Swiper('.gallery-swiper', {
      modules: [Navigation],
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 5,
      loop: true,
      navigation: {
        nextEl: '.gallery-swiper__button--next',
        prevEl: '.gallery-swiper__button--prev',
      },
    });
  } else {
    if (swiperGallery) {
      swiperGallery = null;
    }
  }
}

initGallerySwiper();


/* сортировка пунктов меню футера */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.footer-navigation__item');

  items.forEach((item, index) => {
    item.style.gridColumn = index < Math.ceil(items.length / 2) ? '1' : '2';
  });
});


/* Валидация формы */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const phoneInput = document.querySelector('.form__input--phone');
  const emailInput = document.querySelector('.form__input--email');

  form.addEventListener('submit', (event) => {
    let isValid = true;

    const phoneRegex = /^\+?\d[\d\s()-]*\d$|^\+?\d(?:(?:[\s()]\d)|(?:-\d))+$/;
    if (!phoneRegex.test(phoneInput.value)) {
      isValid = false;
      phoneInput.setCustomValidity('Номер телефона может состоять только из цифр, пробелов, «+», «-» и скобок');
      phoneInput.classList.add('error');
    } else {
      phoneInput.setCustomValidity('');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.(?:[a-z]{2,}|рф)$/i;
    if (!emailRegex.test(emailInput.value)) {
      isValid = false;
      emailInput.setCustomValidity('Введите корректный email');
      emailInput.classList.add('error');
    } else {
      emailInput.setCustomValidity('');
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  phoneInput.addEventListener('input', () => {
    if (phoneInput.validity.valid) {
      phoneInput.classList.remove('error');
      phoneInput.setCustomValidity('');
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
      emailInput.classList.remove('error');
      emailInput.setCustomValidity('');
    }
  });
});

/* перерисовываем страницу при ресайзе для корректного отображения элементов */

window.addEventListener('resize', () => {
  location.reload();
});
