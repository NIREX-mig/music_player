"use client";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  // baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SHAZAM_CORE_API ,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL ,
    // prepareHeaders: (headers) => {
    //   headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_RAPIDAPI_KEY );
    //   return headers;
    // },
   }),
  endpoints: (builder) => ({
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US` }),
    getSong : builder.query({query : () => '/sample.json'})
  }),
});
export const { useGetSongsBySearchQuery, useGetSongQuery } = shazamApi;