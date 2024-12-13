import { menuToggle } from './modules/menu';
import Swiper from 'swiper';
import { Pagination} from 'swiper/modules';
import '../sass/vendor/swiper.css';

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

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    menuToggle();
    swiperHero.init();
  });
});
