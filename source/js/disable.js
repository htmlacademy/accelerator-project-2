const btnNext = document.querySelectorAll('.swiper-button-next');
const btnPrev = document.querySelectorAll('.swiper-button-prev');

function setBtnOpacity (elems) {
  elems.forEach(el =>{
    el.style.opacity = '1';
  })
}

// function setDisableColor (buttons) {
//   buttons.forEach(button =>{
//     button.addEventListener('click', ()=>{
//       button.classList.includes('swiper-button-disabled') ? button.style.backgroundColor = '#999' : button.style.backgroundColor = '#0264c0'
//     })
//   })
// }

setBtnOpacity(btnNext);
setBtnOpacity(btnPrev);

// setDisableColor(btnNext);
// setDisableColor(btnPrev);


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
  // }else {
  //   elem.style.backgroundColor = '#0264c0';
  // }
    })
  })
}

hangBtnDisableListener(btnNext,btnPrev);
hangBtnDisableListener(btnPrev,btnNext);

