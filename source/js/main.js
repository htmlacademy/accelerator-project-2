// https://swiperjs.com/get-started#installation
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
