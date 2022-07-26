// Операции с Бургером

//Нашли нужные элементы
const burgerIcon = document.querySelector(".header__wrapper__logo__burger");
const burgerMenu = document.querySelector(
  ".header__wrapper__logo__burger__elements__wrapper"
);
const burgerCloseIcon = document.querySelector(
  ".header__wrapper__logo__burger__elements__wrapper-cross"
);

//Нужна переменная отслеживать текущее состояние, по умолчанию закрыт
let burgerIsOpened = false;

//Создали функции для работы
const burgerClick = () => {
  if (burgerIsOpened) {
    burgerMenu.classList.add("hidden");
  } else {
    burgerMenu.classList.remove("hidden");
  }

  burgerIsOpened = !burgerIsOpened;
};

const closeBurger = (e) => {
  e.stopPropagation(); // Убирает "проваливание", чтобы после нажатия closeBurger не срабатывал burgerClick из-за вложенности
  burgerMenu.classList.add("hidden");
  burgerIsOpened = false;
};

//Вешаем на клик
burgerIcon.addEventListener("click", burgerClick);
burgerCloseIcon.addEventListener("click", closeBurger);

// Модальное окно

// Карусель
const carouselWrapper = document.querySelector(".destinations__wrapper__carousel__items");
const carouselControls = document.querySelectorAll(".destinations__wrapper__carousel__controls button")

const carouselItems = 3;
let activeButton = 1;

for (let i = 0; i <  carouselControls.length; i+=1) {
  carouselControls[i].addEventListener("click", () => {
    const carouselWidth = carouselWrapper.getBoundingClientRect().width;
    const shift = carouselWidth / carouselItems;

    carouselWrapper.style.transform = `translateX(${(shift - shift * i)}px)`

    carouselControls[activeButton].classList.remove('active');
    activeButton = i;
    carouselControls[i].classList.add('active');
  })
}

window.addEventListener("resize", () => {
  const carouselWidth = carouselWrapper.getBoundingClientRect().width;
  const shift = carouselWidth / carouselItems;

  carouselWrapper.style.transform = `translateX(${(shift - shift * activeButton)}px)`
})








