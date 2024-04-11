
export function createServiceItems(services) {
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