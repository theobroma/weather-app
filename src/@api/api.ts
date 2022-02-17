import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = 'https://api.weatherapi.com/v1';

export const instance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});
