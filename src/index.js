import './styles.css';
import fetchSearchedCitiesData from './fetch-searched-cities-data';
import renderSearchedCitiesData from './render-searched-cities-data';

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

    fetchSearchedCitiesData(cityName).then((data) => {
      renderSearchedCitiesData(data, searchedCityContainer);
    });
  });

  return content;
}

document.body.appendChild(component());
