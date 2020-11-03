import { API_KEY, instance } from './api';

export const searchAPI = {
  place(place: string) {
    return instance.get<any>(`/search.json?key=${API_KEY}&q=${place}`);
  },
};
