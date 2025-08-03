// paths for apis
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "apiService",

  baseQuery: fetchBaseQuery({
    // baseUrl: "${config.rfq_service}/api/v1/",
    baseUrl: "http://localhost:8080/",
    credentials: "include",
  }),
  tagTypes: ["User", "Cart"],
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
      getPhotosByIds: builder.query({
        query: (ids) => `photos/findByIds?ids=${ids}`,
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
      getCurrentUser: builder.query({
        query: () => "users/current",
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
      login: builder.mutation({
        query: (payload) => ({
          url: "auth/login",
          method: "POST",
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
        invalidatesTags: ["User"],
      }),
      logout: builder.mutation({
        query: () => ({
          url: "auth/logout",
          method: "POST",
        }),
        invalidatesTags: ["User"],
      }),
      getCart: builder.query({
        query: () => "cart",
        providesTags: ["Cart"],
      }),
      addCartItem: builder.mutation({
        query: (payload) => ({
          url: "cart",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["Cart"],
      }),
      deleteCartItem: builder.mutation({
        query: (photoDetailsId) => ({
          url: `cart/${photoDetailsId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Cart"],
      }),
      clearCart: builder.mutation({
        query: () => ({
          url: `cart`,
          method: "DELETE",
        }),
        invalidatesTags: ["Cart"],
      }),
    };
  },
});

export const {
  useGetPhotosQuery,
  useGetPhotosByIdsQuery,
  useGetPhotoQuery,
  useSubmitPhotoMutation,
  useGetCategoriesQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useEditUserMutation,
  useLogoutMutation,
  useAddCartItemMutation,
  useGetCartQuery,
  useDeleteCartItemMutation,
  useClearCartMutation,
} = apiService;
