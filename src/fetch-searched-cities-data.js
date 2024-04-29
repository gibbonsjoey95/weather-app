async function fetchSearchedCitiesData(cityName) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=ad84ea924ded499592915023242304&q=${cityName}`,
      { mode: 'cors' },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while fetching data:', error);
    throw error;
  }
}

export default fetchSearchedCitiesData;
