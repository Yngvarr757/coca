export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');

  const closeBurgerMenu = () => {
    overlay.classList.remove('overlay--visible');
    burgerMenu.classList.remove('header__right--visible');
    burgerBtn.classList.remove('burger--active');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
  });
  overlay.addEventListener('click', closeBurgerMenu);
};
