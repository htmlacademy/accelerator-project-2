const heroSlides = document.querySelectorAll('.hero__item');
const gallerySlides = document.querySelectorAll('.gallery__item');
const heroButtons = document.querySelectorAll('.hero__button');

const getTabindexSlider = () => {

  const isValid = () => {
    const desktopWidth = window.matchMedia('(min-width: 1440px)');
    return desktopWidth.matches;
  };

  if (isValid()) {
    for (let i = 0; i < gallerySlides.length; i++) {
      gallerySlides[i].setAttribute('tabindex', '-1');
    }
    for (let j = 0; j < heroSlides.length; j++) {
      heroSlides[j].setAttribute('tabindex', '-1');
    }
    for (let l = 0; l < heroButtons.length; l++) {
      heroButtons[l].setAttribute('tabindex', '-1');
      heroButtons[0].setAttribute('tabindex', '0');
    }
  } else if (!isValid()) {
    for (let i = 0; i < gallerySlides.length; i++) {
      gallerySlides[i].setAttribute('tabindex', '0');
    }
    for (let j = 0; j < heroSlides.length; j++) {
      heroSlides[j].setAttribute('tabindex', '0');
    }
    for (let l = 0; l < heroButtons.length; l++) {
      heroButtons[l].setAttribute('tabindex', '0');
    }
  }
};

export { getTabindexSlider };
