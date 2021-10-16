import axios from 'axios';
import { ForecastResponseType } from '../@types';
import { API_URL } from './api';
// https://stackoverflow.com/questions/51275434/cannot-get-jest-typescript-axios-test
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('axios');

const param = {
  lat: 51.5341714,
  lon: 33.3767724,
  days: 3,
};

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data: any = {
      data: {
        location: {
          country: 'Ukraine',
          lat: 51.55,
          localtime: '2021-10-12 11:15',
          localtime_epoch: 1634026541,
          lon: 33.37,
          name: 'Korolevets',
          region: "Sums'ka Oblast'",
          tz_id: 'Europe/Kiev',
        },
      },
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(
      mockedAxios.get<ForecastResponseType>(
        `${API_URL}/forecast.json?q=${param.lat},${param.lon}&days=${param.days}`,
      ),
    ).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(
      mockedAxios.get<ForecastResponseType>(
        `${API_URL}/forecast.json?q=${param.lat},${param.lon}&days=${param.days}`,
      ),
    ).rejects.toThrow(errorMessage);
  });
});
