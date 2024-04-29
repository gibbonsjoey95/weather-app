import './styles.css';
import fetchData from './fetch-data';
import processData from './process-data';
import renderSearchedCityData from './render-searched-city-data';

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
        renderSearchedCityData(data, searchedCityContainer);
      });
  });

  return content;
}

document.body.appendChild(component());
