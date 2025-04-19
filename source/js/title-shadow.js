document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.main-title');

  titles.forEach((title) => {
    if (!title.querySelector('.main-title__shadow-title')) {
      const shadowText = document.createElement('span');
      shadowText.classList.add('main-title__shadow-title');
      shadowText.textContent = title.textContent;

      title.appendChild(shadowText);
    }
  });
});
