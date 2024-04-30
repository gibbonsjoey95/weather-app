const processesCityData = (data) => {
  const { location, current } = data;
  const { name, region, country } = location;
  const {
    temp_f: tempF,
    temp_c: tempC,
    feelslike_f: feelsLikeF,
    feelslike_c: feelsLikeC,
    last_updated: lastUpdated,
    humidity,
    condition,
  } = current;
  const { text, icon } = condition;

  return {
    name,
    region,
    country,
    tempF,
    tempC,
    feelsLikeF,
    feelsLikeC,
    lastUpdated,
    humidity,
    text,
    icon,
  };
};

export default processesCityData;
