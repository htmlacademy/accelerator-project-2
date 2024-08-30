import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('#swiper-tours', {
  spaceBetween: 18,
  navigation: {
    nextEl: '.tours__button-next',
    prevEl: '.tours__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 18,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
    }
  }
});
