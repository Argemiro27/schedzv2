import axios from 'axios';

const API_KEY = '71b1f0d2';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather',
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getWeatherData = async (city: string) => {
  
  const response = await api.get(`?format=json-cors&key=${API_KEY}&city_name=${city}`);
  return response.data;
};
