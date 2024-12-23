// import Swiper JS
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';

// import 'swiper/css/navigation';
import 'swiper/css/navigation';

const tourSlider = new Swiper ('.tours__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
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
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  loop : false,
  touchRatio: 1,
  touchAngle: 45,
});

tourSlider.slideReset();
