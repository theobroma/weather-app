import { searchPlaceResponseType } from '../@types';
import { instance } from './api';

export const searchAPI = {
  place(place: string) {
    return instance.get<searchPlaceResponseType[]>(`/search.json?q=${place}`);
  },
};
