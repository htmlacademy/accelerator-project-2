import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

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
