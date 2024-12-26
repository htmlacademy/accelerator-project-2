// import Swiper JS
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';

// import 'swiper/css/navigation';
import 'swiper/css/navigation';

const tourSlider = new Swiper ('.reviews__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  direction: 'horizontal',

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.26,
      spaceBetween: 28,
    },
    1440: {
      slidesPerView: 1.76,
      spaceBetween: 110,
    }
  },
  loop : false,
  touchRatio: 1,
  touchAngle: 45,
});

tourSlider.slideReset();
