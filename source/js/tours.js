import Swiper from "swiper/bundle";
import 'swiper/scss';

new Swiper('#swiper-tours', {
  spaceBetween: 18,
  navigation: {
    nextEl: '.tours__button-next',
    prevEl: '.tours__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1366: {
      spaceBetween: 30,
      slidesPerView: 3,
    }
  }
})

// const optionsTours = {
//   slidesPerView: 1,
//   spaceBetween: 18,
//   loop: true,
//   // autoplay: {
//   //   delay: 3000,
//   // },
//   navigation: {
//     nextEl: '.tours__button-next',
//     prevEl: '.tours__button-prev',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1366: {
//       spaceBetween: 30,
//       slidesPerView: 3,
//     }
//   }
// };

// document.addEventListener('DOMContentLoaded', () => {

//   const swiperTours = new Swiper('#swiper-tours', optionsTours);

//   const buttonSwiperPrevious = document.querySelector('.tours__swiper-buttons .swiper-button-prev');

//   buttonSwiperPrevious.addEventListener('click', () => {
//     swiperTours.slidePrev(100, false);
//   });

//   const buttonSwiperNext = document.querySelector('.tours__swiper-buttons .swiper-button-next');

//   buttonSwiperNext.addEventListener('click', () => {
//     swiperTours.slideNext(100, false);
//   });
// });
