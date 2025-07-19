// paths for apis
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "apiService",

  baseQuery: fetchBaseQuery({
    // baseUrl: "${config.rfq_service}/api/v1/",
    baseUrl: "http://localhost:8080/",
  }),
  tagTypes: ["User"],
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
      submitPhoto: builder.mutation({
        query: (payload) => ({
          url: "photos/",
          method: "POST",
          body: payload,
        }),
      }),
      getCategories: builder.query({ query: () => `categories` }),
      login: builder.mutation({
        query: (payload) => ({
          url: "auth/login",
          method: "POST",
          body: payload,
        }),
      }),
      getUser: builder.query({
        query: (id) => `users/${id}`,
        providesTags: ["User"],
      }),
      editUser: builder.mutation({
        query: ({ id, payload }) => ({
          url: `users/${id}`,
          method: "PUT",
          body: payload,
        }),
        invalidatesTags: ["User"],
      }),
      register: builder.mutation({
        query: (payload) => ({
          url: "users",
          method: "POST",
          body: payload,
        }),
      }),
    };
  },
});

export const {
  useGetPhotosQuery,
  useGetPhotoQuery,
  useSubmitPhotoMutation,
  useGetCategoriesQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useEditUserMutation,
} = apiService;
