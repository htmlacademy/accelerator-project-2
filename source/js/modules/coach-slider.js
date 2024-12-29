import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

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
