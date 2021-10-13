import { CurrentWeatherResponseType } from '../@types';
import { instance } from './api';

export const currentWeatherApi = {
  currentWeather(lat: number, lon: number) {
    return instance.get<CurrentWeatherResponseType>(
      `/current.json?q=${lat},${lon}`,
    );
  },
};
