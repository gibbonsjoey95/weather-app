import processesCityData from './process-city-data';

const renderCityData = (data, container) => {
  const processedCityData = processesCityData(data);

  const cityWeatherContainer = document.createElement('div');

  const cityName = document.createElement('h1');
  cityName.textContent = processedCityData.name;
  cityWeatherContainer.appendChild(cityName);

  const cityRegion = document.createElement('h2');
  cityRegion.textContent = processedCityData.region;
  cityWeatherContainer.appendChild(cityRegion);

  const cityCountry = document.createElement('h2');
  cityCountry.textContent = processedCityData.country;
  cityWeatherContainer.appendChild(cityCountry);

  const cityLastUpdated = document.createElement('p');
  cityLastUpdated.textContent = processedCityData.lastUpdated;
  cityWeatherContainer.appendChild(cityLastUpdated);

  const cityDescriptionIcon = document.createElement('img');
  cityDescriptionIcon.src = processedCityData.icon;
  cityWeatherContainer.appendChild(cityDescriptionIcon);

  const cityDescription = document.createElement('p');
  cityDescription.textContent = processedCityData.text;
  cityWeatherContainer.appendChild(cityDescription);

  const cityTempF = document.createElement('p');
  cityTempF.textContent = `Temperature: ${processedCityData.tempF}\u00B0F/${processedCityData.tempC}\u00B0C`;
  cityWeatherContainer.appendChild(cityTempF);

  const cityFeelsLikeF = document.createElement('p');
  cityFeelsLikeF.textContent = `Feels like ${processedCityData.feelsLikeF}\u00B0F/${processedCityData.feelsLikeC}\u00B0C`;
  cityWeatherContainer.appendChild(cityFeelsLikeF);

  const cityHumidity = document.createElement('p');
  cityHumidity.textContent = `Humidity: ${processedCityData.humidity}`;
  cityWeatherContainer.appendChild(cityHumidity);

  container.appendChild(cityWeatherContainer);
};

export default renderCityData;
