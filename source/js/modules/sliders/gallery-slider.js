import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initGallerySlider = () => {
  const gallerySlider = document.querySelector('[data-slider="gallery-slider"]');
  if (!gallerySlider) {
    return;
  }

  let swiperInstance = null;
  const mediaQuery = window.matchMedia('(max-width: 1439px)');

  const initializeSlider = () => {
    if (mediaQuery.matches) {
      if (!swiperInstance) {
        swiperInstance = new Swiper(gallerySlider, {
          modules: [Navigation],
          watchOverflow: true,
          speed: 500,
          loop: true,
          autoHeight: false,
          navigation: {
            nextEl: '.gallery__arrow--next',
            prevEl: '.gallery__arrow--prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
              simulateTouch: true,
            },
            768: {
              simulateTouch: false,
              grabCursor: false,
              slidesPerView: 3,
              spaceBetween: 5,
            }
          },
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  };

  // Initialize slider on load
  initializeSlider();

  // Reinitialize slider on window resize
  mediaQuery.addEventListener('change', initializeSlider);
};

export { initGallerySlider };
