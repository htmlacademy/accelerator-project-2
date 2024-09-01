import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initAdvSlider = () => {
  new Swiper('.advantages__container .swiper', {
    enabled: false,

    modules: [Navigation],

    navigation: {
      nextEl: '.advantages__controls-button--next',
      prevEl: '.advantages__controls-button--prev',
    },

    breakpoints: {
      1440: {
        enabled: true,

        loop: true,
        allowTouchMove: false,

        slidesPerGroup: 2,
        initialSlide: 2,

        slidesPerView: 'auto',
        centeredSlides: true,

        spaceBetween: 30,
      },
    },
  });
};

export { initAdvSlider };
