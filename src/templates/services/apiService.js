// paths for apis
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "apiService",

  baseQuery: fetchBaseQuery({
    // baseUrl: "${config.rfq_service}/api/v1/",
    baseUrl: "http://localhost:8080/",
  }),

  endpoints: (builder) => {
    return {
      getPhotos: builder.query({
        query: (filter) => {
          if (filter && Object.keys(filter).length > 0) {
            const queryString = new URLSearchParams(filter).toString();
            return `photos?${queryString}`;
          } else {
            return `photos`;
          }
        },
      }),
      getPhoto: builder.query({ query: (id) => `photos/${id}` }),
      login: builder.mutation({
        query: (payload) => ({
          url: "auth/login",
          method: "POST",
          body: payload,
        }),
      }),
      getUser: builder.query({ query: (id) => `users/${id}` }),
    };
  },
});

export const { useGetPhotosQuery, useGetPhotoQuery, useLoginMutation } =
  apiService;
