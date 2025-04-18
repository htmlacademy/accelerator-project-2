document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.main-title');

  if (title) {
    const shadowText = document.createElement('span');
    shadowText.classList.add('main-title__shadow-title');
    shadowText.textContent = title.textContent;

    title.appendChild(shadowText);
  }
});
