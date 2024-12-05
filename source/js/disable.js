const btnNext = document.querySelectorAll('.swiper-button-next');
const btnPrev = document.querySelectorAll('.swiper-button-prev');

function setBtnOpacity (elems) {
  elems.forEach(el =>{
    el.style.opacity = '1';
  })
}

setBtnOpacity(btnNext);
setBtnOpacity(btnPrev);


btnPrev.forEach(button =>{
  if (button.classList.contains('swiper-button-disabled')) {
    button.style.backgroundColor = '#999';
  }
})

btnNext.forEach(button =>{
  if (button.classList.contains('swiper-button-disabled')) {
    button.style.backgroundColor = '#999';
  }
})

function hangBtnDisableListener (elems1, elems2) {
  elems1.forEach(elem =>{
    elem.addEventListener('click', ()=>{
      if (elem.classList.contains('swiper-button-disabled')) {
        elem.style.backgroundColor = '#999';
        elems2.forEach(
          elem =>{
            if(!elem.classList.contains('swiper-button-disabled')){
              elem.style.backgroundColor = '#0264c0';
            }
          }
      )}
    })
  })
}

hangBtnDisableListener(btnNext,btnPrev);
hangBtnDisableListener(btnPrev,btnNext);
