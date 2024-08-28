import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('#swiper-reviews', {
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.65,
    },
    1440: {
      spaceBetween: 120,
      slidesPerView: 1.82,
    }
  }
});
