import Swiper from 'swiper';
import { Navigation } from'swiper/modules';
import '../../sass/vendor/swiper.css';

const createSlider = () => {
  if (document.querySelector('.adv__swiper')) {
    return new Swiper('.adv__swiper', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.adv__button-swiper--next',
        prevEl: '.adv__button-swiper--prev',
      },
      breakpoints: {
        1440: {
          spaceBetween: 30,
          slidesPerGroup: 2,
          slidesOffsetBefore: 30,
        },
      }
    });
  }
  return null;
};

const getAdvantagesSlider = () => {
  let swiper = null;

  const isValid = () => {
    const desktopWidth = window.matchMedia('(min-width: 1440px)');
    return desktopWidth.matches;
  };

  if (isValid()) {
    swiper = createSlider();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      if (!swiper) {
        swiper = createSlider();
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  });
};

export {getAdvantagesSlider};
