import { openMenu } from '../js/modules/open-menu';
import { initHeroSlider } from '../js/modules/sliders/hero-slider';
import { initToursSlider } from '../js/modules/sliders/tours-slider';
import { initTrainingSlider } from '../js/modules/sliders/training-slider';
import { initReviewsSlider } from '../js/modules/sliders/reviews-slider';

window.addEventListener('DOMContentLoaded', () => {
  openMenu();
  initHeroSlider();
  window.addEventListener('load', () => {
    initToursSlider();
    initTrainingSlider();
    initReviewsSlider();
  });
});
