import { useMemo } from "react";
import { skipToken } from "@reduxjs/toolkit/query/react";
import {
  useGetCartQuery,
  useGetPhotosByIdsQuery,
  useDeleteCartItemMutation,
} from "../../templates/services/apiService";

import { makeIdsParam, calcSubtotal } from "./utils";

export default function useCart() {
  const { data: cartData = [], isLoading: cartLoading } = useGetCartQuery();

  const idsParam = useMemo(() => makeIdsParam(cartData), [cartData]);

  const { data: photosData = [], isLoading: photosLoading } =
    useGetPhotosByIdsQuery(idsParam || skipToken, {
      refetchOnMountOrArgChange: false,
    });

  const [deleteItem, { isLoading: isDeleting }] = useDeleteCartItemMutation();

  const subtotal = useMemo(
    () => calcSubtotal(cartData, photosData),
    [cartData, photosData]
  );

  return {
    cartData,
    photosData,
    subtotal,
    loading: cartLoading || photosLoading || isDeleting,
    deleteItem,
  };
}
