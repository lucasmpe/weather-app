const BASE_URL = 'http://ip-api.com/json';

const getResource = async (resourceUrl) => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const ipApi = {
  getCurrentCoord: () => getResource(`${BASE_URL}/?fields=status,message,lat,lon,city`)
};

export default ipApi;
