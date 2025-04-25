import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initTrainersSwiper = () => {
  const swiper = new Swiper('.training__slider', {
    modules: [ Navigation ],
    navigation: {
      nextEl: '.training__slider-control-button.swiper-button-next',
      prevEl: '.training__slider-control-button.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 0,
      },
    }
  });

  return swiper;
};

export { initTrainersSwiper };
