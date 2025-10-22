export const filterData = (data, locationType, locationName) => {
  return data.filter((dest) => {
    return dest[locationType].toLowerCase() === locationName.toLowerCase();
  });
};
