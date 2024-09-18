
export function setupPriceListToggle() {
  document.querySelector('.prices__list').addEventListener('click', (e) => {
    if (e.target.classList.contains('prices__btn')) {
      const item = e.target.closest('.prices__item');
      item.classList.toggle('prices__item--open');
      e.target.classList.toggle('prices__btn--open');
    }
  });
}
