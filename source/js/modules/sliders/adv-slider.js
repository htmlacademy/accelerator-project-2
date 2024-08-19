import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const createAdvSlider = () => {
  const advSlider = document.querySelector('[data-slider="adv-slider"]');
  if (advSlider) {
    return new Swiper(advSlider, {
      modules: [Navigation],
      simulateTouch: false,
      grabCursor: false,
      speed: 500,
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 2,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.adv__arrow--next',
        prevEl: '.adv__arrow--prev',
      },
    });
  }
  return null;
};

const initAdvSlider = () => {
  let swiper = null;
  const isValid = () => {
    const desktopWidth = window.matchMedia('(min-width: 1440px)');
    return desktopWidth.matches;
  };

  if (isValid()) {
    swiper = createAdvSlider();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      if (!swiper) {
        swiper = createAdvSlider();
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  });
};

export { initAdvSlider };
