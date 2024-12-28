import { menuToggle, navLinkToggle } from './modules/menu';
import { getAdvantagesSlider } from './modules/adv-slider';
import { getGallerySlider } from './modules/gallery-slider';
import './modules/swiper';
import './modules/adv-slider';
import { validForm, validateLength } from './modules/validate';


window.addEventListener('DOMContentLoaded', () => {
  getAdvantagesSlider();
  getGallerySlider();
  validForm();
  validateLength();

  window.addEventListener('load', () => {
    menuToggle();
    navLinkToggle();
  });
});
