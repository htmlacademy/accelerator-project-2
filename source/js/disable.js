const btnNext = document.querySelectorAll('.swiper-button-next');
const btnPrev = document.querySelectorAll('.swiper-button-prev');

function removeDisable (elems) {
  elems.forEach(el =>{
    el.style.opacity = '1';
  })
}

removeDisable(btnNext);
removeDisable(btnPrev);
