export type ForecastDayInfoType = {
  forecastday: Array<ForecastdayResponseType>;
};

export type ForecastdayResponseType = {
  date: string;
  //   day: DayResponseType;
  day: any;
  //   astro: AstroResponseType;
  astro: any;
  //   hour: Array<HourResponseType>;
  hour: any;
};

export type LocationResponseType = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type ConditionResponseType = {
  text: string;
  icon: string;
  code: number;
};

export type CurrentWeatherResponseType = {
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
