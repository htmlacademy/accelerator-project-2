import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initGallerySlider = () => {
  new Swiper('.gallery__container .swiper', {
    loop: true,
    freeMode: true,

    modules: [Navigation],

    navigation: {
      nextEl: '.gallery__controls-button--next',
      prevEl: '.gallery__controls-button--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 5,
        allowTouchMove: false,
      },
      1440: {
        slidesPerView: 5,
        enabled: false
      },
    },
  });
};

export { initGallerySlider };
