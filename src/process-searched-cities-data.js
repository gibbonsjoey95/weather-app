import fetchData from './fetch-searched-cities-data';

async function processSearchedCitiesData() {
  try {
    const data = await fetchData();

    const cityArray = data.map((city) => {
      const { name, region, country, url } = city;

      return { name, region, country, url };
    });

    return cityArray;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while processing data:', error);
    throw error;
  }
}

export default processSearchedCitiesData;
