const processesCityData = (data) => {
  const { location, current } = data;
  const { name } = location;
  const { temp_f: tempF } = current;

  return { name, tempF };
};

export default processesCityData;
