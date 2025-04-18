import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

function toggleNavButtons(swiper) {
  const prevButton = document.querySelector('.slider-navigation--prev');
  const nextButton = document.querySelector('.slider-navigation--next');

  if (!prevButton || !nextButton) {
    return;
  }

  const totalSlides = swiper.slides.length;
  const slidesPerView = swiper.params.slidesPerView;
  const currentIndex = swiper.activeIndex;

  prevButton.disabled = swiper.isBeginning;
  nextButton.disabled = currentIndex >= totalSlides - slidesPerView;
}

export const initSlider = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Инициализация слайдера для hero__swiper
    new Swiper('.hero__swiper', {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.hero__swiper-pagination',
        bulletClass: 'hero__pagination-control',
        bulletActiveClass: 'hero__pagination-control-active',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1440: {
          allowTouchMove: false,
        }
      }
    });

    // Инициализация слайдера для tours__swiper
    new Swiper('.tours__swiper', {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.slider-navigation--next',
        prevEl: '.slider-navigation--prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
      on: {
        init: function () {
          toggleNavButtons(this);
        },
        slideChange: function () {
          toggleNavButtons(this);
        },
      }
    });
  });
};
