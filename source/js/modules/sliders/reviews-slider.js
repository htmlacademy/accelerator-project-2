import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initReviewsSlider = () => {
  const reviewsSlider = document.querySelector('[data-slider="reviews-slider"]');
  if (!reviewsSlider) {
    return;
  }

  new Swiper(reviewsSlider, {
    modules: [Navigation],
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    loop: false,
    autoHeight: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
      lockClass: 'disabled',
    },
    breakpoints: {
      320: {
        initialSlide: 0,
        autoHeight: true,
      },
      768: {
        spaceBetween: 0,
        simulateTouch: false,
        autoHeight: false,
      },
      1440: {
        spaceBetween: 100,
        autoHeight: false,
      },
    },
  });
};

export { initReviewsSlider };
