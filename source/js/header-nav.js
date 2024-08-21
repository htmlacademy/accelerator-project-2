const headerBtn = document.querySelector(".header__burger-button");
const headerClose = headerBtn.querySelector(".burger-button-close");
const headerOpen = headerBtn.querySelector(".burger-button-open");
const headerMenu = document.querySelector(".header-nav__wrapper");
const fadedPromoBlock = document.querySelector(".promo");
const bodyEl = document.querySelector(".page-body");
const menuList = bodyEl.querySelector(".header-nav__list");

function closeMenu() {
  headerOpen.classList.remove("burger-button--closed");
  headerClose.classList.add("burger-button--closed");
  headerMenu.classList.add("header-nav__wrapper---closed");
  fadedPromoBlock.style.filter = "none";
  bodyEl.style.overflow = "auto";
}

headerBtn.addEventListener("click", () => {
  if (!headerOpen.classList.contains("burger-button--closed")) {
    headerOpen.classList.add("burger-button--closed");
    headerClose.classList.remove("burger-button--closed");
    headerMenu.classList.remove("header-nav__wrapper---closed");
    fadedPromoBlock.style.filter = "brightness(0.5)";
    bodyEl.style.overflow = "hidden";
  } else {
    closeMenu();
  }
});

menuList.addEventListener("click", () => {
  closeMenu();
});
