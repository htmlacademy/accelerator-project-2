import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';


new Swiper('#swiper-hero', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// const optionsHero = {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 1,
//     },
//     1366: {
//       slidesPerView: 1,
//     }
//   }
// };

// document.addEventListener('DOMContentLoaded', () => {
//   const swiperHero = new Swiper('#swiper-hero', optionsHero);
//   const buttonSwiperPrevious = document.querySelector('.swiper-buttons-hero .swiper-pagination');
//   buttonSwiperPrevious.addEventListener('click', () => {
//     swiperHero.slidePrev(500, false);
//   });
//   const buttonSwiperNext = document.querySelector('.swiper-buttons-hero .swiper-pagination');
//   buttonSwiperNext.addEventListener('click', () => {
//     swiperHero.slideNext(500, false);
//   });
// });

