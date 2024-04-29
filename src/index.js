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
    fetchData(cityNameInput.value)
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

// Instead of clearing the container every time, consider updating the existing elements
