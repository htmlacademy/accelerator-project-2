const createStars = (filled) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '15');
  svg.setAttribute('height', '13');

  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '/__spritemap#sprite-star-fill-none');


  if (filled) {
    use.setAttribute('href', '/__spritemap#sprite-star-fill-white');
  }

  svg.appendChild(use);
  return svg;
};

const getRating = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelectorAll('.card__info-list-item');
    starsContainer.forEach((item) => {
      const ratingSpan = item.querySelector('[data-rating]');

      if(ratingSpan) {
        const ratingValue = ratingSpan.dataset.rating;
        ratingSpan.innerHTML = '';

        for (let i = 0; i < 5; i++) {
          const star = createStars(i < ratingValue);
          ratingSpan.appendChild(star);
        }
      }
    });
  });
};

export { getRating };
