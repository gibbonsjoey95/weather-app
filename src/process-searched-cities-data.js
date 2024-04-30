const processSearchedCitiesData = (data) => {
  const cityArray = data.map((city) => {
    const { name, region, country, url } = city;

    return { name, region, country, url };
  });

  return cityArray;
};

export default processSearchedCitiesData;
