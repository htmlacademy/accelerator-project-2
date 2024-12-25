// import Swiper JS
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';

// import 'swiper/css/navigation';
import 'swiper/css/navigation';

const tourSlider = new Swiper ('.training__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
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
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
  loop : false,
  touchRatio: 1,
  touchAngle: 45,
});

tourSlider.slideReset();
