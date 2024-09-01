import { toggleBurgerMenu, scrollToPageBlock } from './modules/burger-menu.js';
import { initHeroSlider } from './modules/hero-slider.js';
import { initToursSlider } from './modules/tours-slider.js';
import { initTrainingSlider } from './modules/training-slider.js';
import { initReviewsSlider } from './modules/reviews-slider.js';
import { initAdvSlider } from './modules/adv-slider.js';
import { initGallerySlider } from './modules/gallery-slider.js';
import { validatesForm } from './modules/validation-form.js';

toggleBurgerMenu();
scrollToPageBlock();
initHeroSlider();
initToursSlider();
initTrainingSlider();
initReviewsSlider();
initAdvSlider();
initGallerySlider();
validatesForm();
