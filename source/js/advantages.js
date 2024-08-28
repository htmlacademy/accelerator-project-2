import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('#swiper-advantages', {
  loop: true,
  navigation: {
    nextEl: '.advantages__button-next',
    prevEl: '.advantages__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      noSwiping: false,
      allowSlidePrev: false,
      allowSlideNext: false
    },
    768: {
      slidesPerView: 2,
      noSwiping: false,
      allowSlidePrev: false,
      allowSlideNext: false
    },
    1440: {
      slidesPerView: 1.76,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true,
    }
  }
});
