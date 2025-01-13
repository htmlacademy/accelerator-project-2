// import Swiper JS
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlider = new Swiper('.hero__swiper', {
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

// Функция для обновления tabindex у кнопок слайдов
const updateTabindexForSlides = () => {
  const slides = document.querySelectorAll('.hero__item');
  slides.forEach((slide, index) => {
    const link = slide.querySelector('.hero__link');
    if (index === heroSlider.realIndex) {
      link.setAttribute('tabindex', '0'); // Делаем кнопку доступной для табуляции
    } else {
      link.setAttribute('tabindex', '-1'); // Делаем кнопку недоступной для табуляции
    }
  });
};

// Функция для обновления цвета фона section
const updateSectionBackground = () => {
  const activeSlide = document.querySelector('.hero__item.swiper-slide-active');
  const section = document.querySelector('.hero');
  if (activeSlide && section) {
    const bgColor = activeSlide.getAttribute('data-bg-color'); // Получаем цвет из атрибута data-bg-color
    section.style.backgroundColor = bgColor; // Применяем цвет к section
  }
};

// Обработчик события смены слайда
heroSlider.on('slideChange', () => {
  updateTabindexForSlides(); // Обновляем tabindex для кнопок слайдов
  updateSectionBackground(); // Обновляем цвет фона section
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
    updateTabindexForSlides(); // Обновляем tabindex для кнопок слайдов
    updateSectionBackground(); // Обновляем цвет фона section
  });

  // Добавляем обработчик событий для клавиатуры (Enter или Space)
  bullet.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Предотвращаем стандартное поведение
      heroSlider.slideTo(index); // Переключаемся на соответствующий слайд
      updateTabindexForSlides(); // Обновляем tabindex для кнопок слайдов
      updateSectionBackground(); // Обновляем цвет фона section
    }
  });
});

// Инициализация слайдера
heroSlider.slideReset();

// Инициализация цвета фона при загрузке страницы
updateSectionBackground();
