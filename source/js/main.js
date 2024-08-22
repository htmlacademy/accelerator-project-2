import { openMenu } from '../js/modules/open-menu';
import { initHeroSlider } from '../js/modules/sliders/hero-slider';
import { initToursSlider } from '../js/modules/sliders/tours-slider';
import { initTrainingSlider } from '../js/modules/sliders/training-slider';
import { initReviewsSlider } from '../js/modules/sliders/reviews-slider';
import { initAdvSlider } from '../js/modules/sliders/adv-slider';
import { initGallerySlider } from '../js/modules/sliders/gallery-slider';
import { validateForm } from '../js/modules/validate-form';

window.addEventListener('DOMContentLoaded', () => {
  openMenu();
  window.addEventListener('load', () => {
    initHeroSlider();
    initToursSlider();
    initTrainingSlider();
    initReviewsSlider();
    initAdvSlider();
    initGallerySlider();
    validateForm();
  });
});
