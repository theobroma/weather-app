import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  params: {
    key: API_KEY,
  },
});
