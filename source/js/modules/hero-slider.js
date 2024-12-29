import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

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
