import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initHeroSlider = () => {
  if (!document.querySelector('[data-slider="hero-slider"]')) {
    return null;
  }

  const heroSlider = document.querySelector('[data-slider="hero-slider"]');
  let isFirstLoad = true;

  const initActiveSlide = () => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (!activeSlide) return;

    const allSlides = document.querySelectorAll('.hero-slide');
    allSlides.forEach((slide) => {
      slide.querySelectorAll('a').forEach((slideLink) => {
        slideLink.setAttribute('tabindex', '-1');
      });
    });

    activeSlide.querySelectorAll('a').forEach((slideLink) => {
      slideLink.setAttribute('tabindex', '0');
    });
  };

  const setActiveLink = () => {
    if (isFirstLoad) return;

    setTimeout(() => {
      const activeSlide = document.querySelector('.swiper-slide-active');
      if (activeSlide) {
        const slideLink = activeSlide.querySelector('a');
        if (slideLink) {
          slideLink.focus();
        }
      }
    }, 100);
  };

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
      bulletElement: 'button type="button"',
      bulletClass: 'hero__slider-bullet',
      bulletActiveClass: 'hero__slider-bullet--is-active',
    },
    on: {
      init: () => {
        initActiveSlide();
        isFirstLoad = false;
      },
      slideChange: () => {
        initActiveSlide();
        setActiveLink();
      },
      slideChangeTransitionStart: () => {
        initActiveSlide();
      },
    },
  });
};

export { initHeroSlider };
