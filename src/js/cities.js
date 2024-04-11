export function createCitiesItems(cities) {
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