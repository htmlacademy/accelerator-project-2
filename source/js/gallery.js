import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('#swiper-gallery', {
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 6,
      slidesPerView: 2,
    },
    768: {
      loop: true,
      spaceBetween: 4,
      slidesPerView: 3,
    },
    1440: {
      loop:false,
      spaceBetween: 6,
      slidesPerView: 5,
    }
  }
});
