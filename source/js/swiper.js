import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".promo-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperTours = new Swiper(".tours-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: "horizontal",
  loop: false,

  scrollbar: {
    el: ".tours-swiper-scrollbar",
  },
});

const swiperInstructors = new Swiper(".instructors-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: "horizontal",
  loop: false,

  scrollbar: {
    el: ".instructors-swiper-scrollbar",
  },
});

const swiperReviews = new Swiper(".reviews-swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: "horizontal",
  loop: false,

  scrollbar: {
    el: ".reviews-swiper-scrollbar",
  },
});

const swiperAdvantages = new Swiper(".advantages-swiper", {
  init: false,
  breakpoints: {
    1440: {
      init: true,
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },

  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: false,

  scrollbar: {
    el: ".advantages-swiper-scrollbar",
  },

  pagination: {
    el: ".advantages-pagination",
  },
});

const swiperGallery = new Swiper(".gallery-swiper", {
  slidesPerView: 2,
  spaceBetween: 5,
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: true,

  scrollbar: {
    el: ".gallery-swiper-scrollbar",
  },

  pagination: {
    el: ".gallery-pagination",
  },
});
