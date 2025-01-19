// ============= certificates ================
let certificatesSlider = new Swiper('.certificates_slider', {
  wrapperClass: 'certificates_slider_wrap',
  slideClass: 'page',
  slidesPerView: 3, // Показывать три слайда одновременно
  slidesPerGroup: 3, // Свайпать сразу три слайда
  spaceBetween: 5,
  loop: true, // Включить зацикливание слайдов
  loopedSlides: 3, // Количество слайдов в группе для зацикливания
  autoplay: {
      delay: 4000, // Смена слайдов каждые 4 секунды
      disableOnInteraction: false, // Автосвайп останавливается после ручного взаимодействия
  },
  speed: 1000, // Скорость анимации перехода (в миллисекундах)
});

lightGallery(document.getElementById('animated-thumbnails-gallery'), {
  thumbnail: true,
  animateThumb: false,
  zoomFromOrigin: false,
  allowMediaOverlap: true,
  toggleThumb: true,
});
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Останавливаем стандартную отправку
    const formData = new FormData(event.target);
    try {
        const response = await fetch('/submit_feedback', {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            alert('Форма успешно отправлена!');
            event.target.reset(); // Очищаем форму
        } else {
            alert('Ошибка отправки формы. Попробуйте снова.');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка сети. Проверьте соединение.');
    }
});

// ============= adaptive ================
function adaptive(width) {
  if (width > 1920) {
      // Добавьте адаптивные настройки, если нужно
  }
  if (width <= 1920) {
      // Добавьте адаптивные настройки, если нужно
  }
  if (width <= 1280) {
      certificatesSlider.params.slidesPerView = 2; // Показывать 2 слайда
  }
  if (width <= 1024) {
      // Добавьте адаптивные настройки, если нужно
  }
  if (width <= 768) {
      certificatesSlider.params.slidesPerView = 1; // Показывать 1 слайд
  }
  if (width <= 425) {
      // Добавьте адаптивные настройки, если нужно
  }
  if (width <= 320) {
      // Добавьте адаптивные настройки, если нужно
  }
  certificatesSlider.update(); // Обновить слайдер после изменения настроек
};

// Запуск адаптивных настроек
adaptive(window.innerWidth);