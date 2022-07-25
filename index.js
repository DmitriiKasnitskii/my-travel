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
