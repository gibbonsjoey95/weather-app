import fetchCityData from './fetch-city-data';

const renderSearchedCitiesData = (data, container) => {
  if (data) {
    data.forEach((city, index) => {
      let cityContainer = container.querySelector(`#city-${index}`);

      if (!cityContainer) {
        const cityNameElement = document.createElement('h1');
        const cityRegionElement = document.createElement('h3');
        const cityCountryElement = document.createElement('p');
        const cityUrl = city.url;

        cityNameElement.textContent = city.name;
        cityRegionElement.textContent = city.region;
        cityCountryElement.textContent = city.country;

        cityContainer = document.createElement('div');
        cityContainer.id = `city-${index}`;
        cityContainer.appendChild(cityNameElement);
        cityContainer.appendChild(cityRegionElement);
        cityContainer.appendChild(cityCountryElement);

        cityContainer.addEventListener('click', () => {
          fetchCityData(cityUrl);
        });

        container.appendChild(cityContainer);
      }
    });
  } else {
    const errorMsg = document.createElement('h1');
    errorMsg.textContent = 'Failed to fetch weather data.';
    container.appendChild(errorMsg);
  }
};

export default renderSearchedCitiesData;
