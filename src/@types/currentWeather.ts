import { ConditionResponseType } from './General';

export type CurrentWeatherType = {
  condition: ConditionResponseType;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  precip_mm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  uv: number;
  gust_kph: number;
  last_updated: string;
  temp_c: number;
  is_day: number;
};

export type LocationType = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type CurrentWeatherResponseType = {
  location: LocationType;
  current: CurrentWeatherType;
};
