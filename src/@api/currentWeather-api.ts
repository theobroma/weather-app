import { LocationResponseType, CurrentWeatherResponseType } from '../@types';
import { instance } from './api';

export const currentWeatherApi = {
  currentWeather(lat: number, lon: number) {
    return instance.get<CurrectWeatherType>(`/current.json?q=${lat},${lon}`);
  },
};

export type CurrectWeatherType = {
  location: LocationResponseType;
  current: CurrentWeatherResponseType;
};
