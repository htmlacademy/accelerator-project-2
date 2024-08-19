import Swiper from "swiper/bundle";
import 'swiper/scss';

new Swiper('#swiper-reviews', {
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 1.29,
    },
    1366: {
      spaceBetween: 120,
      slidesPerView: 1.7,
    }
  }
})
