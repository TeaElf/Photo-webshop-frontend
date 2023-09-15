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
          console.log("apiServicefilter: ", filter);
          if (filter) {
            return `photos?${filter}`;
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
    };
  },
});

export const { useGetPhotosQuery, useGetPhotoQuery, useLoginMutation } =
  apiService;
