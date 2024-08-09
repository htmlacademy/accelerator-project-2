import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const trainingSliderInit = () => {
  if (document.querySelector('[data-slider="training-slider"]')) {
    const trainingSlider = document.querySelector('[data-slider="training-slider"]');
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
          initialSlide: 0,
        },

        768: {
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
  }
};

export { trainingSliderInit };
