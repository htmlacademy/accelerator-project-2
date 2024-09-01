import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initHeroSlider = () => {
  new Swiper('.hero__container .swiper', {
    loop: true,
    slidesPerView: 1,
    allowTouchMove: true,

    modules: [Pagination],

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
  });
};

export { initHeroSlider };
