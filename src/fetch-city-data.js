async function fetchCityData(cityUrl) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ad84ea924ded499592915023242304&q=${cityUrl}`,
    );
    const cityData = await response.json();

    console.log(cityData.location);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while fetching data', error);
  }
}

export default fetchCityData;
