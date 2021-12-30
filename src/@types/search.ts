import * as z from 'zod';
// ===Original Types===
// export type SearchPlaceResponseType = SearchPlaceItemType[];

// export type SearchPlaceItemType = {
//   country: string;
//   id: number;
//   lat: number;
//   lon: number;
//   name: string;
//   region: string;
//   url: string;
// };

// ===Schemas===
export const SearchPlaceItemSchema = z.object({
  country: z.string(),
  id: z.number(),
  lat: z.number(),
  lon: z.number(),
  name: z.string(),
  region: z.string(),
  url: z.string(),
});

const SearchPlaceResponseSchema = z.array(SearchPlaceItemSchema);
// ===Types from Schemas===
export type SearchPlaceItemType = z.infer<typeof SearchPlaceItemSchema>;
export type SearchPlaceResponseType = z.infer<typeof SearchPlaceResponseSchema>;
