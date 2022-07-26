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

// Карусель
const carouselWrapper = document.querySelector(".destinations__wrapper__carousel__items");
const carouselControls = document.querySelectorAll(".destinations__wrapper__carousel__controls button");
const carouselControlsArrowLeft = document.querySelector(".destinations__wrapper__carousel__controls__mobile .left");
const carouselControlsArrowRight = document.querySelector(".destinations__wrapper__carousel__controls__mobile .right");

const carouselItems = 3;
let activeButtonIndex = 1;

const resizeFunction = () => {
  const carouselWidth = carouselWrapper.getBoundingClientRect().width;
  const shift = carouselWidth / carouselItems;
  const arrowShift = shift / 2 - 30;

  carouselWrapper.style.transform = `translateX(${(shift - shift * activeButtonIndex)}px)`
  carouselControlsArrowLeft.style.left = `-${arrowShift}px`;
  carouselControlsArrowRight.style.left = `${arrowShift}px`;
}

const shiftFunction = (newIndex) => {
  const carouselWidth = carouselWrapper.getBoundingClientRect().width;
  const shift = carouselWidth / carouselItems;

  carouselWrapper.style.transform = `translateX(${(shift - shift * newIndex)}px)`

  carouselControls[activeButtonIndex].classList.remove('active');
  activeButtonIndex = newIndex;
  carouselControls[newIndex].classList.add('active');
}

for (let i = 0; i <  carouselControls.length; i+=1) {
  carouselControls[i].addEventListener("click", () => shiftFunction(i))
}

carouselControlsArrowLeft.addEventListener("click", () => {
  if (activeButtonIndex - 1 < 0) {
    return;
  }

  shiftFunction(activeButtonIndex - 1)
})

carouselControlsArrowRight.addEventListener("click", () => {
  if (activeButtonIndex + 1 > carouselItems - 1) {
    return;
  }

  shiftFunction(activeButtonIndex + 1)
})

window.addEventListener("resize", resizeFunction)

resizeFunction(); // Исполняем один раз вручную, чтобы при запуске в мобильном режиме сразу расположил стрелки как надо

// Модальное окно

