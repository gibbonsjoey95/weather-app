async function fetchCityData(cityUrl) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ad84ea924ded499592915023242304&q=${cityUrl}&aqi=no`,
      { mode: 'cors' },
    );
    const cityData = await response.json();

    return cityData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while fetching data', error);
    throw error;
  }
}

export default fetchCityData;
