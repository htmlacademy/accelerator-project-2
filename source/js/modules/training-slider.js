import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initTrainingSlider = () => {
  new Swiper('.training__container .swiper', {
    loop: false,
    freeMode: true,

    modules: [Navigation],

    navigation: {
      nextEl: '.training__controls-button--next',
      prevEl: '.training__controls-button--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        initialSlide: 2,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        allowTouchMove: false,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
      },
    },
  });
};

export { initTrainingSlider };
