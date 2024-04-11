import { services, cities } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  addBurgerMenuListener();
  addServiceButtonListeners();
  setupPriceListToggle();
  setupCitySelection();
  createServiceItems(services);
  createCitiesItems(cities);
}

function addBurgerMenuListener() {
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

let activeServiceBtnCount = 0;

function addServiceButtonListeners() {
  document.querySelector('.service__filters').addEventListener('click', (e) => {
    const targetBtn = e.target;
    if (targetBtn.classList.contains('service__btn')) {
      toggleServiceButton(targetBtn);
      filterServices();
    }
  });
}

function toggleServiceButton(button) {
  if (activeServiceBtnCount === 2 && !button.classList.contains('button--active')) {
    document.querySelectorAll('.service__btn.button--active').forEach(activeButton => {
      activeButton.classList.remove('button--active');
    });
    activeServiceBtnCount = 0;
  }
  button.classList.toggle('button--active');
  activeServiceBtnCount = document.querySelectorAll('.service__btn.button--active').length;
}

function filterServices() {
  const activeBtns = document.querySelectorAll('.service__btn.button--active');
  const activeFilters = Array.from(activeBtns).map(btn => btn.textContent.trim());
  document.querySelectorAll('.service__item').forEach(item => {
    const isMatch = activeFilters.length === 0 || activeFilters.includes(item.dataset.about);
    item.classList.toggle('service__blur', !isMatch);
  });
}

function setupPriceListToggle() {
  document.querySelector('.prices__list').addEventListener('click', (e) => {
    if (e.target.classList.contains('prices__btn')) {
      const item = e.target.closest('.prices__item');
      item.classList.toggle('prices__item--open');
      e.target.classList.toggle('prices__btn--open');
    }
  });
}

function setupCitySelection() {
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

function toggleCitySelect(select, wrapper, image, button) {
  const isOpen = select.classList.contains('city__select--open');
  select.classList.toggle('city__select--open', !isOpen);
  wrapper.classList.toggle('contacts__city--show', !isOpen);
  image.classList.toggle('contacts__image--none', !isOpen);
}

function closeCitySelect(select, wrapper, image, button) {
  select.classList.remove('city__select--open');
  wrapper.classList.remove('contacts__city--show');
  image.classList.remove('contacts__image--none');
  button.innerText = 'City';
}

function updateCitySelection(selectedOption, wrapper, image, button) {
  const cityName = selectedOption.innerText;
  button.innerText = cityName;
  document.querySelectorAll('.city__item').forEach(item => item.classList.remove('city__item--active'));
  document.getElementById(selectedOption.dataset.city)?.classList.add('city__item--active');
  closeCitySelect(wrapper, wrapper, image, button);
}

function createServiceItems(services) {
  const container = document.querySelector('.service__content');
  services.forEach(service => {
    const item = document.createElement('li');
    item.className = 'service__item';
    item.setAttribute('data-about', service.about);

    item.innerHTML = `
                    <img class="service__img" src="${service.imgSrc}" width="329" height="350" alt="${service.name}">
                    <div class="service__info">
                        <h4 class="service__name">${service.name}</h4>
                        <p class="service__descr">${service.descr}</p>
                    </div>
                `;

    container.appendChild(item);
  });
}

function createCitiesItems(cities) {
  const contactsCityDiv = document.querySelector('.contacts__city');

  cities.forEach(city => {
    const cityItem = document.createElement('div');
    cityItem.className = 'city__item';
    cityItem.id = city.id;

    cityItem.innerHTML = `
      <span>City:</span>
      <span>${city.name}</span>
      <span>Phone:</span>
      <span><a href="tel:${city.phone}">${city.phone}</a></span>
      <span>Office address:</span>
      <span>${city.address}</span>
      <button class="button city__button" onclick="window.open('tel:${city.phone}', '_system');">Call us</button>
    `;

    contactsCityDiv.appendChild(cityItem);
  });
}