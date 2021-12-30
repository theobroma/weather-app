import * as z from 'zod';

export type SearchPlaceResponseType = SearchPlaceItemType[];

export type SearchPlaceItemType = {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
};

// export const SearchPlaceSchema = z.object({
//   country: z.string(),
//   id: z.number(),
//   lat: z.number(),
//   lon: z.number(),
//   name: z.string(),
//   region: z.string(),
//   url: z.string(),
// });

// const SearchPlaceArrSchema = z.array(SearchPlaceSchema);

// export type SearchPlaceResponseType = z.infer<typeof SearchPlaceArrSchema>;
