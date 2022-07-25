const burgerIcon = document.querySelector(".header__wrapper__logo__burger");
const burgerMenu = document.querySelector(
  ".header__wrapper__logo__burger__elements__wrapper"
);
const burgerCloseIcon = document.querySelector(
  ".header__wrapper__logo__burger__elements__wrapper-cross"
);
let burgerIsOpened = false;

const burgerClick = () => {
  if (burgerIsOpened) {
    burgerMenu.classList.add("hidden");
  } else {
    burgerMenu.classList.remove("hidden");
  }

  burgerIsOpened = !burgerIsOpened;
};

const closeBurger = (e) => {
  e.stopPropagation();
  burgerMenu.classList.add("hidden");
  burgerIsOpened = false;
};

burgerIcon.addEventListener("click", burgerClick);
burgerCloseIcon.addEventListener("click", closeBurger);
