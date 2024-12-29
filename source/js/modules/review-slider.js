import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
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
