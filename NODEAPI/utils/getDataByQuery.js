export const getDataByQuery = (data, query) => {
  const { continent, country, is_open } = query;

  if (continent) {
    data = data.filter(
      (dest) => dest.continent.toLowerCase() === continent.toLowerCase()
    );
  }
  if (country) {
    data = data.filter(
      (dest) => dest.country.toLowerCase() === country.toLowerCase()
    );
  }
  if (is_open) {
    data = data.filter(
      (dest) => dest.is_open === JSON.parse(is_open.toLowerCase())
    );
  }

  return data
};
