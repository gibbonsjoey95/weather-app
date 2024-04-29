const renderSearchedCityData = (data, container) => {
  if (data) {
    data.forEach((city, index) => {
      let cityContainer = container.querySelector(`#city-${index}`);

      if (!cityContainer) {
        const cityNameElement = document.createElement('h1');
        const cityRegionElement = document.createElement('h3');
        const cityCountryElement = document.createElement('p');

        cityNameElement.textContent = city.name;
        cityRegionElement.textContent = city.region;
        cityCountryElement.textContent = city.country;

        cityContainer = document.createElement('div');
        cityContainer.id = `city-${index}`;
        cityContainer.appendChild(cityNameElement);
        cityContainer.appendChild(cityRegionElement);
        cityContainer.appendChild(cityCountryElement);
        container.appendChild(cityContainer);
      }
    });
  } else {
    const errorMsg = document.createElement('h1');
    errorMsg.textContent = 'Failed to fetch weather data.';
    container.appendChild(errorMsg);
  }
};

export default renderSearchedCityData;
