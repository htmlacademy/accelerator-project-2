import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const initHeroSwiper = () => {
  const swiper = new Swiper('.hero-slider', {
    modules: [ Pagination ],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    breakpoints: {
      320: {
        grabCursor: true,
        allowTouchMove: true,
        pagination: {
          clickable: false,
        },
      },
      768: {
        grabCursor: true,
        allowTouchMove: true,
        pagination: {
          clickable: false,
        },
      },
      1440: {
        grabCursor: false,
        allowTouchMove: false,
        pagination: {
          clickable: true,
        },
      },
    }
  });
  return swiper;
};

export { initHeroSwiper };

