import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".promo-swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: true,
  spaceBetween: 0,

  breakpoints: {
    320: { allowTouchMove: true },
    768: {
      allowTouchMove: true,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperTours = new Swiper(".tours-swiper", {
  breakpoints: {
    320: { allowTouchMove: true },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      allowTouchMove: true,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: false,

  scrollbar: {
    el: ".tours-swiper-scrollbar",
  },

  navigation: {
    nextEl: ".tours-swiper-button-next",
    prevEl: ".tours-swiper-button-prev",
  },
});

const swiperToursPrevBtn = document.querySelector(".swiper-button-prev");
swiperToursPrevBtn.addEventListener("click", () => swiperTours.slidePrev());
const swiperToursNxtBtn = document.querySelector(".swiper-button-next");
swiperToursNxtBtn.addEventListener("click", () => swiperTours.slideNext());

const swiperInstructors = new Swiper(".instructors-swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
      allowTouchMove: true,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: true,
    },
  },
  scrollbar: {
    el: ".instructors-swiper-scrollbar",
  },

  navigation: {
    nextEl: ".instructor-swiper-button-next",
    prevEl: ".instructor-swiper-button-prev",
  },
});

const swiperReviews = new Swiper(".reviews-swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 1.26,
      spaceBetween: 30,
      allowTouchMove: true,
    },
  },

  scrollbar: {
    el: ".reviews-swiper-scrollbar",
  },

  navigation: {
    nextEl: ".reviews-swiper-button-next",
    prevEl: ".reviews-swiper-button-prev",
  },
});

const swiperAdvantages = new Swiper(".advantages-swiper", {
  init: false,
  breakpoints: {
    768: {
      disable: true,
    },

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
  breakpoints: {
    768: {
      disable: true,
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },

  scrollbar: {
    el: ".gallery-swiper-scrollbar",
  },

  pagination: {
    el: ".gallery-pagination",
  },

  navigation: {
    nextEl: ".gallery-swiper-button-next",
    prevEl: ".gallery-swiper-button-prev",
  },
});
