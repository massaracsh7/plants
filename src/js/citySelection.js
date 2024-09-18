export function setupCitySelection() {
  const cityOpenBtn = document.querySelector('.city__open');
  const citySelect = document.querySelector('.city__select');
  const cityWrapper = document.querySelector('.contacts__city');
  const cityImage = document.querySelector('.contacts__image');

  cityOpenBtn.addEventListener('click', () => toggleCitySelect(citySelect, cityWrapper, cityImage, cityOpenBtn));

  citySelect.addEventListener('click', (e) => {
    if (e.target.dataset.city) {
      updateCitySelection(e.target, cityWrapper, cityImage, cityOpenBtn);
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.contacts__city, .city__open')) {
      closeCitySelect(citySelect, cityWrapper, cityImage, cityOpenBtn);
    }
  });
}

export function toggleCitySelect(select, wrapper, image, button) {
  const isOpen = select.classList.contains('city__select--open');
  select.classList.toggle('city__select--open', !isOpen);
  wrapper.classList.toggle('contacts__city--show', !isOpen);
  image.classList.toggle('contacts__image--none', !isOpen);
}

export function closeCitySelect(select, wrapper, image, button) {
  select.classList.remove('city__select--open');
  wrapper.classList.remove('contacts__city--show');
  image.classList.remove('contacts__image--none');
  button.innerText = 'City';
}

export function updateCitySelection(selectedOption, wrapper, image, button) {
  const cityName = selectedOption.innerText;
  button.innerText = cityName;
  document.querySelectorAll('.city__item').forEach(item => item.classList.remove('city__item--active'));
  document.getElementById(selectedOption.dataset.city)?.classList.add('city__item--active');
  closeCitySelect(wrapper, wrapper, image, button);
}