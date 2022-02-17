import { ForecastResponseType } from '../@types';
import { instance } from './api';

export const forecastAPI = {
  dailyWeather(days: number, lat: number, lon: number) {
    return instance.get<ForecastResponseType>(
      `/forecast.json?q=${lat},${lon}&days=${days}`,
    );
  },
};
