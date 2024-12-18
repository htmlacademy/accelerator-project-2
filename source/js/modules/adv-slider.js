import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

const advSwiper = document.querySelector('.adv__swiper');
const advSwiperWrapper = document.querySelector('.adv__list');
const advSwiperSlide = document.querySelectorAll('.adv__item');

const swiperAdv = new Swiper('.adv__swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  modules: [Navigation],
  navigation: {
    nextEl: '.adv__button-swiper--next',
    prevEl: '.adv__button-swiper--prev',
  },
  slideClass: 'adv__item',
  wrapperClass: 'adv__list',
});


const swiperResize = () => {

  if (window.innerWidth >= 1440) {
    advSwiper.classList.add('swiper');
    advSwiperWrapper.classList.add('swiper-wrapper');
    advSwiperSlide.classList.add('swiper-slide');
  }
  if (window.innerWidth < 1440) {
    swiperAdv.destroy();
    advSwiper.classList.remove('swiper');
    advSwiperWrapper.classList.remove('swiper-wrapper');
    advSwiperSlide.classList.remove('swiper-slide');
  }

  swiperAdv.init();
};

window.addEventListener('load', swiperResize);
window.addEventListener('resize', swiperResize);
