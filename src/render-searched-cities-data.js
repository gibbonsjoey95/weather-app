import fetchCityData from './fetch-city-data';
import processSearchedCitiesData from './process-searched-cities-data';
import renderCityData from './render-city-data';

const renderSearchedCitiesData = (data, container) => {
  const processedData = processSearchedCitiesData(data);

  processedData.forEach((city, index) => {
    let cityContainer = container.querySelector(`#city-${index}`);

    if (!cityContainer) {
      cityContainer = document.createElement('div');
      cityContainer.id = `city-${index}`;

      const cityNameElement = document.createElement('h1');
      cityNameElement.textContent = city.name;
      cityContainer.appendChild(cityNameElement);

      const cityRegionElement = document.createElement('h3');
      cityRegionElement.textContent = city.region;
      cityContainer.appendChild(cityRegionElement);

      const cityCountryElement = document.createElement('p');
      cityCountryElement.textContent = city.country;
      cityContainer.appendChild(cityCountryElement);

      const cityUrl = document.createElement('p');
      cityUrl.textContent = city.url;
      cityContainer.appendChild(cityUrl);

      cityContainer.addEventListener('click', () => {
        fetchCityData(city.url)
          .then((d) => renderCityData(d))
          // eslint-disable-next-line no-console
          .catch((error) => console.error('Error fetching data:', error));
      });

      container.appendChild(cityContainer);
    }
  });
};

export default renderSearchedCitiesData;
