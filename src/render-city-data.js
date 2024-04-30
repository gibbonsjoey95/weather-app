import processesCityData from './process-city-data';

const renderCityData = (data) => {
  if (data) {
    const processedCityData = processesCityData(data);
    console.log(processedCityData);
  }
};

export default renderCityData;
