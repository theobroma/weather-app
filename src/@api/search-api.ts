import * as z from 'zod';
import { SearchPlaceResponseType } from '../@types';
import { instance } from './api';

export const searchAPI = {
  place(place: string) {
    return instance.get<SearchPlaceResponseType[]>(`/search.json?q=${place}`);
  },
};
