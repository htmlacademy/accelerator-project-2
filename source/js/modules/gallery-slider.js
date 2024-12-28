import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

const createSliderGallery = () => {
  if (document.querySelector('.gallery__swiper')) {
    return new Swiper('.gallery__swiper', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      spaceBetween: 5,
      slidesPerView: 2,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.gallery__button-swiper--next',
        prevEl: '.gallery__button-swiper--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
        },
      }
    });
  }
  return null;
};

const getGallerySlider = () => {
  let swiper = null;

  const isValid = () => {
    const desktopWidth = window.matchMedia('(max-width: 1439px)');
    return desktopWidth.matches;
  };

  if (isValid()) {
    swiper = createSliderGallery();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      if (!swiper) {
        swiper = createSliderGallery();
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  });
};

export { getGallerySlider};
