import { menuToggle } from './modules/menu';
import { getAdvantagesSlider } from './modules/adv-slider';
import './modules/swiper';
import './modules/adv-slider';


window.addEventListener('DOMContentLoaded', () => {
  getAdvantagesSlider();
  
  window.addEventListener('load', () => {
    menuToggle();
  });
});
