import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initReviewsSlider = () => {
  new Swiper('.reviews__container .swiper', {
    loop: false,
    freeMode: true,
    slidesPerView: 'auto',

    modules: [Navigation],

    navigation: {
      nextEl: '.reviews__controls-button--next',
      prevEl: '.reviews__controls-button--prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 15,
      },

      768: {
        spaceBetween: 30,
        allowTouchMove: false,
      },
      1440: {
        spaceBetween: 120,
        allowTouchMove: false,
      },
    },
  });
};

export { initReviewsSlider };
