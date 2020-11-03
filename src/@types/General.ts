export type FilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

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
