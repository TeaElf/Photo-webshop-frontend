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
      getPhotos: builder.query({ query: () => "photos" }),
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

export const { useGetPhotosQuery, useLoginMutation } = apiService;
