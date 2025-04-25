import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initToursSwiper = () => {
  const swiper = new Swiper('.tours__slider', {
    modules: [ Navigation ],
    navigation: {
      nextEl: '.tours__slider-control-button.swiper-button-next',
      prevEl: '.tours__slider-control-button.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });

  return swiper;
};

export { initToursSwiper };
