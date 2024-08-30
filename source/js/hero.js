import Swiper from 'swiper';
import 'swiper/css';
import { Pagination } from 'swiper/modules';


new Swiper('#swiper-hero', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    modifierClass: 'hero__wrapper-pagination',
    bulletClass: 'hero__button-pagination',
    bulletActiveClass: 'hero__button-pagination--active',
  },
  modules: [Pagination],
});
