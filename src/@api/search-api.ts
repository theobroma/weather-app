import * as z from 'zod';
// import { SearchPlaceResponseType } from '../@types';
import { instance } from './api';

const SearchPlaceSchema = z.object({
  country: z.string(),
  id: z.number(),
  lat: z.number(),
  lon: z.number(),
  name: z.string(),
  region: z.string(),
  url: z.string(),
});

const SearchPlaceArrSchema = z.array(SearchPlaceSchema);

type SearchPlaceResponseType = z.infer<typeof SearchPlaceArrSchema>;

export const searchAPI = {
  place(place: string) {
    return instance.get<SearchPlaceResponseType[]>(`/search.json?q=${place}`);
  },
};
