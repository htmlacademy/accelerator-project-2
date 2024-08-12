import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initToursSlider = () => {
  const toursSlider = document.querySelector('[data-slider="tours-slider"]');
  if (!toursSlider) return;

  new Swiper(toursSlider, {
    modules: [Navigation],
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    loop: false,
    autoHeight: false,
    navigation: {
      nextEl: '.tours__arrow--next',
      prevEl: '.tours__arrow--prev',
      lockClass: 'disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        simulateTouch: false,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};

export { initToursSlider };
