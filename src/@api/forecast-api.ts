import {
  LocationType,
  CurrentWeatherType,
  AstroResponseType,
  DayResponseType,
  HourResponseType,
} from '../@types';
import { instance } from './api';

export const forecastAPI = {
  dailyWeather(days: number, lat: number, lon: number) {
    return instance.get<ForecastType>(
      `/forecast.json?q=${lat},${lon}&days=${days}`,
    );
  },
};

export type ForecastType = {
  location: LocationType;
  current: CurrentWeatherType;
  forecast: ForecastDayInfoType;
};

export type ForecastDayInfoType = {
  forecastday: Array<ForecastdayResponseType>;
};

export type ForecastdayResponseType = {
  date: string;
  day: DayResponseType;
  astro: AstroResponseType;
  hour: Array<HourResponseType>;
};
