let activeServiceBtnCount = 0;

export function addServiceButtonListeners() {
  document.querySelector('.service__filters').addEventListener('click', (e) => {
    const targetBtn = e.target;
    if (targetBtn.classList.contains('service__btn')) {
      toggleServiceButton(targetBtn);
      filterServices();
    }
  });
}

export function toggleServiceButton(button) {
  if (activeServiceBtnCount === 2 && !button.classList.contains('button--active')) {
    document.querySelectorAll('.service__btn.button--active').forEach(activeButton => {
      activeButton.classList.remove('button--active');
    });
    activeServiceBtnCount = 0;
  }
  button.classList.toggle('button--active');
  activeServiceBtnCount = document.querySelectorAll('.service__btn.button--active').length;
}

export function filterServices() {
  const activeBtns = document.querySelectorAll('.service__btn.button--active');
  const activeFilters = Array.from(activeBtns).map(btn => btn.textContent.trim());
  document.querySelectorAll('.service__item').forEach(item => {
    const isMatch = activeFilters.length === 0 || activeFilters.includes(item.dataset.about);
    item.classList.toggle('service__blur', !isMatch);
  });
}

