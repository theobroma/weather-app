import { API_KEY, instance } from './api';

export const forecastAPI = {
  dailyWeather(days: number, lat: number, lon: number) {
    return instance.get<any>(
      `/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=${days}`,
    );
  },
};
