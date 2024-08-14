import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initTrainingSlider = () => {
  const trainingSlider = document.querySelector('[data-slider="training-slider"]');
  if (!trainingSlider) {
    return;
  }

  new Swiper(trainingSlider, {
    modules: [Navigation],
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    loop: false,
    autoHeight: false,
    navigation: {
      nextEl: '.training__arrow--next',
      prevEl: '.training__arrow--prev',
      lockClass: 'disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 20,
        simulateTouch: false,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
};

export { initTrainingSlider };
