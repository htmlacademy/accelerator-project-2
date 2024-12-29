import { menuToggle, navLinkToggle } from './modules/menu';
import { getAdvantagesSlider } from './modules/adv-slider';
import { getGallerySlider } from './modules/gallery-slider';

import { getTabindexSlider } from './modules/tabindex';
import { validForm, validateLength } from './modules/validate';
import './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  getAdvantagesSlider();
  getGallerySlider();

  window.addEventListener('load', () => {
    menuToggle();
    navLinkToggle();
    validForm();
    validateLength();
    getTabindexSlider();

  });

  window.addEventListener('resize', () => {
    getTabindexSlider();
  });
});
