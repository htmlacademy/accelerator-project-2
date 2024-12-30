// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

let gallerySwiper = null;

function initSwiper() {
  if (window.innerWidth <= 768 && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery__swiper', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      grabCursor: true,
      simulateTouch: true,
      touchRatio: 1,
      touchAngle: 45,
      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        }
      }
    });
  }
}

function destroySwiper() {
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
}

function handleResize() {
  if (window.innerWidth <= 768) {
    if (!gallerySwiper) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const debouncedHandleResize = debounce(handleResize, 100);

window.addEventListener('resize', debouncedHandleResize);
window.addEventListener('load', initSwiper);
