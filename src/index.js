import './styles.css';
import fetchData from './fetch-data';
import processData from './process-data';

const content = document.querySelector('#content');
const searchedCityContainer = document.querySelector('#searchedCityContainer');
const cityNameInput = document.querySelector('#cityNameInput');
const getCityWeatherDataButton = document.querySelector(
  '#getCityWeatherDataButton',
);

function component() {
  getCityWeatherDataButton.addEventListener('click', () => {
    const cityName = cityNameInput.value.trim();

    if (!cityName) {
      const errorMsg = document.createElement('h1');
      errorMsg.textContent = 'Can not leave city name field blank';
      searchedCityContainer.textContent = '';
      searchedCityContainer.appendChild(errorMsg);
      return;
    }

    searchedCityContainer.textContent = '';

    fetchData(cityName)
      .then(processData())
      .then((data) => {
        if (data) {
          data.forEach((city, index) => {
            let cityNameElement = searchedCityContainer.querySelector(
              `#city-${index}`,
            );
            if (!cityNameElement) {
              cityNameElement = document.createElement('h1');
              cityNameElement.id = `city-${index}`;
              searchedCityContainer.appendChild(cityNameElement);
            }

            cityNameElement.textContent = city.name;
          });
        } else {
          const errorMsg = document.createElement('h1');
          errorMsg.textContent = 'Failed to fetch weather data.';
          searchedCityContainer.appendChild(errorMsg);
        }
      });
  });

  return content;
}

document.body.appendChild(component());
