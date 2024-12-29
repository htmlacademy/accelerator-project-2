import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

const swiperReview = new Swiper('.reviews__swiper', {
  loop: false,
  spaceBetween: 30,
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__button-swiper--next',
    prevEl: '.reviews__button-swiper--prev',
  },
  slideClass: 'reviews__item',
  wrapperClass: 'reviews__list',
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },

    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },

    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
    }
  },
});

swiperReview.init();

const getHeroSlider = new Swiper('.hero__swiper', {
  loop: false,
  slidesPerView: 1,
  modules: [Pagination],
  pagination: {
    type: 'bullets',
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-button',
    bulletActiveClass: 'hero__pagination-button--active',
    renderBullet: function (index, className) {
      return `<button class="hero__pagination-button ${className}" type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
    },
  },
  slideClass: 'hero__item',
  wrapperClass: 'hero__list',
  breakpoints: {
    320: {
      pagination: {
        clickable: false,
      }
    },
    1439: {
      pagination: {
        clickable: false,
      }
    },
    1440: {
      pagination: {
        clickable: true,
      }
    },
  }
});


getHeroSlider.init();

const swiperCoach = new Swiper('.coach__swiper', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  initialSlide: 2,
  modules: [Navigation],
  navigation: {
    nextEl: '.coach__button-swiper--next',
    prevEl: '.coach__button-swiper--prev',
  },
  slideClass: 'coach__item',
  wrapperClass: 'coach__list',
  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
    },

    1440: {
      slidesPerView: 4,
      initialSlide: 0,
    }
  }
});

swiperCoach.init();

const swiperTours = new Swiper('.tours__swiper', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 15,
  modules: [Navigation],
  navigation: {
    nextEl: '.tours__button-swiper--next',
    prevEl: '.tours__button-swiper--prev',
  },
  slideClass: 'tours__item',
  wrapperClass: 'tours__list',
  breakpoints: {
    768: {
      spaceBetween: 18,
    },
    1440: {
      spaceBetween: 30,
    }
  }
});

swiperTours.init();
