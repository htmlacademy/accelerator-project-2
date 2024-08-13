import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initReviewsSlider = () => {
  const reviewsSlider = document.querySelector('[data-slider="reviews-slider"]');
  if (!reviewsSlider) return;

  new Swiper(reviewsSlider, {
    modules: [Navigation],
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    loop: false,
    autoHeight: false,
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
      lockClass: 'disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
      },
      768: {
        slidesPerView: 1.265,
        spaceBetween: 30,
        simulateTouch: false,
      },
      1440: {
        slidesPerView: 1.755,
        spaceBetween: 120,
      },
    },
  });
};

export { initReviewsSlider };
