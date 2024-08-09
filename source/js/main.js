import { openMenu } from '../js/modules/open-menu';
import { heroSliderInit } from '../js/modules/sliders/hero-slider';
import { toursSliderInit } from '../js/modules/sliders/tours-slider';

window.addEventListener('DOMContentLoaded', () => {
  openMenu();
  heroSliderInit();
  window.addEventListener('load', () => {
    toursSliderInit();
  });
});
