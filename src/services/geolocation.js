

const getResource = async (resourceUrl) => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const ipApi = {
  getCurrentCity: () => getResource('http://ip-api.com/json/')
};

export default ipApi;
