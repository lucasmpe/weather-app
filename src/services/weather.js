const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = 'af2c3c7705526a8be92d8bb3ccf75b33';

const getResource = async (resourceUrl) => {
 
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const weatherApi = {
  getCities: (countryCode) => getResource(`${BASE_URL}/geo/1.0/direct?q=${countryCode}&limit=5&appid=${API_KEY}`),
  getCurrentWeather: (city) => getResource(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`),
  getWeatherForecast: (city) => getResource(`${BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`),
  getCity: (lat, lon) => getResource(`${BASE_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
};

export default weatherApi;
