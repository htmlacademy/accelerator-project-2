import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initToursSlider = () => {
  new Swiper('.tours__container .swiper', {
    loop: false,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 15,

    modules: [Navigation],

    navigation: {
      nextEl: '.tours__controls-button--next',
      prevEl: '.tours__controls-button--prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: false,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export { initToursSlider };
