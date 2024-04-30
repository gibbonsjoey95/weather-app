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
      cityContainer.classList.add('city-container');

      const cityNameElement = document.createElement('h1');
      cityNameElement.textContent = city.name;
      cityContainer.appendChild(cityNameElement);

      const cityRegionElement = document.createElement('h3');
      cityRegionElement.textContent = city.region;
      cityContainer.appendChild(cityRegionElement);

      const cityCountryElement = document.createElement('p');
      cityCountryElement.textContent = city.country;
      cityContainer.appendChild(cityCountryElement);

      cityContainer.addEventListener('click', () => {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        fetchCityData(city.url)
          .then((d) => renderCityData(d, container))
          // eslint-disable-next-line no-console
          .catch((error) => console.error('Error fetching data:', error));
      });

      container.appendChild(cityContainer);
    }
  });
};

export default renderSearchedCitiesData;
