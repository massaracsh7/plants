export function addBurgerMenuListener() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__navigation");
  const header = document.querySelector('.header');

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    burger.classList.toggle('burger--open');
    header.classList.toggle('header--mobile');
    menu.classList.toggle("header__navigation--active");
  });

  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      burger.classList.remove('burger--open');
      header.classList.remove('header--mobile');
      menu.classList.remove("header__navigation--active");
    }
  });
}