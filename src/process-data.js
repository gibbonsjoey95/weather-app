import fetchData from './fetch-data';

async function processData() {
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

export default processData;
