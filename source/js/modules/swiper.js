import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

const swiperHero = new Swiper('.hero__swiper', {
  loop: false,
  slidesPerView: 1,
  modules: [Pagination],
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    bulletClass: 'slider__pagination-button',
    bulletActiveClass: 'slider__pagination-button--active',
    type: 'bullets',
    //
    renderBullet: function (index, className) {
      return `<span class= ${className} ></span>`;
    },
  },
  slideClass: 'hero__item',
  wrapperClass: 'hero__list',
});

swiperHero.init();

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
