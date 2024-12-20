// import Swiper JS
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';

// import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSlider = new Swiper ('.hero__swiper', {
  modules: [Pagination],
  pagination: {
    el: '.hero__bulit-wrapper',
    clickable: true,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  loop: true,
  touchRatio: 1,
  touchAngle: 45,
  slidesPerView: 1,

  breakpoints: {
    320: {
      grabCursor: true,
      simulateTouch: true,
    },
    1440: {
      grabCursor: false,
      simulateTouch: false,
    }
  }
});

// Добавляем tabindex="0" к каждому буллиту пагинации
const paginationBullets = document.querySelectorAll('.hero__bulit-wrapper .swiper-pagination-bullet');
paginationBullets.forEach((bullet, index) => {
  bullet.setAttribute('tabindex', '0'); // Делаем буллит доступным для табуляции
  bullet.setAttribute('role', 'button'); // Устанавливаем роль "кнопка" для доступности
  bullet.setAttribute('aria-label', `Перейти к слайду ${index + 1}`); // Добавляем описание для экранных читалок

  // Добавляем обработчик событий для переключения слайдов
  bullet.addEventListener('click', () => {
    heroSlider.slideTo(index); // Переключаемся на соответствующий слайд
  });

  // Добавляем обработчик событий для клавиатуры (Enter или Space)
  bullet.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Предотвращаем стандартное поведение
      heroSlider.slideTo(index); // Переключаемся на соответствующий слайд
    }
  });
});

heroSlider.slideReset();
