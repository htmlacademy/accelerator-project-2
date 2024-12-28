// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

let advSwiper;

// Функция для дублирования слайдов в конец списка
function duplicateSlidesIfNeeded(swiperContainer) {
    const slides = swiperContainer.querySelectorAll('.advertisement__item');
    const totalSlides = slides.length;
    const requiredSlides = 8;

    if (totalSlides < requiredSlides) {
        const slidesToAdd = requiredSlides - totalSlides;
        const swiperWrapper = swiperContainer.querySelector('.advertisement__swiper-wrapper'); // Контейнер для слайдов

        for (let i = 0; i < slidesToAdd; i++) {
            const slideToDuplicate = slides[i % totalSlides]; // Выбираем слайд для дублирования
            const duplicatedSlide = slideToDuplicate.cloneNode(true); // Клонируем слайд
            swiperWrapper.appendChild(duplicatedSlide); // Добавляем в конец
        }
    }
}

// Функция для инициализации Swiper
function initSwiper() {
    if (window.innerWidth >= 1440) {
        const swiperContainer = document.querySelector('.advertisement__swiper');
        duplicateSlidesIfNeeded(swiperContainer); // Дублируем слайды, если нужно

        advSwiper = new Swiper('.advertisement__swiper', {
            modules: [Navigation],
            direction: 'horizontal',
            loop: true, // Включаем бесконечную прокрутку
            slidesPerView: 5, // Количество видимых слайдов
            slidesPerGroup: 2, // Количество слайдов для прокрутки
            initialSlide: 0, // Начальный слайд
            spaceBetween: 30, // Расстояние между слайдами
            width: 2020, // Фиксированная ширина контейнера
            navigation: {
                nextEl: '.advertisement__button--next',
                prevEl: '.advertisement__button--prev',
            },
            on: {
                init: function () {
                    // Применяем сдвиг после инициализации Swiper
                    const swiperWrapper = document.querySelector('.advertisement__swiper-wrapper');
                    swiperWrapper.style.transform = 'translateX(630px)';
                },
            },
        });
    }
}

// Функция для уничтожения Swiper и удаления дублированных слайдов
function destroySwiper() {
    if (advSwiper) {
        const swiperContainer = document.querySelector('.advertisement__swiper');
        const slides = swiperContainer.querySelectorAll('.advertisement__item');
        const totalSlides = slides.length;
        const requiredSlides = 8; // (для loop: true)

        // Удаляем дублированные слайды
        if (totalSlides > requiredSlides) {
            for (let i = totalSlides - 1; i >= requiredSlides; i--) {
                slides[i].remove();
            }
        }

        advSwiper.destroy(true, true);
        advSwiper = null;
    }
}

// Функция для обработки изменения размера окна
function handleResize() {
    if (window.innerWidth >= 1440) {
        if (!advSwiper) {
            initSwiper();
        }
    } else {
        destroySwiper();
    }
}

// Слушатель события изменения размера окна
window.addEventListener('resize', handleResize);

// Инициализация Swiper при загрузке страницы
initSwiper();
