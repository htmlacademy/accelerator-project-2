import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSliderInit = () => {
  if (document.querySelector('[data-slider="hero-slider"]')) {
    const heroSlider = document.querySelector('[data-slider="hero-slider"]');
    new Swiper(heroSlider, {
      modules: [Pagination],
      grabCursor: false,
      watchOverflow: true,
      simulateTouch: false,
      speed: 500,
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      pagination: {
        el: '.hero__slider-pagination',
        clickable: true,
        bulletClass: 'hero__slider-bullet',
        bulletActiveClass: 'hero__slider-bullet--is-active',
      },
    });
  }
};

export { heroSliderInit };
