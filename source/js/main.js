import { openMenu } from '../js/modules/open-menu';
import { heroSliderInit } from '../js/modules/sliders/hero-slider';

window.addEventListener('DOMContentLoaded', () => {
  openMenu();
  heroSliderInit();
  window.addEventListener('load', () => {

  });
});
