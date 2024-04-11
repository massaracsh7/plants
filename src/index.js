import { services, cities } from './data.js';
import { addBurgerMenuListener } from './js/burgerMenu.js';
import { addServiceButtonListeners } from './js/serviceButtons.js';
import { setupPriceListToggle } from './js/priceListToggle.js';
import { setupCitySelection } from './js/citySelection.js';
import { createServiceItems } from './js/services.js';
import { createCitiesItems } from './js/cities.js';


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






