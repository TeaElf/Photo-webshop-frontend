import { useMemo } from "react";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { Box, MenuItem, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import placeholderPhotoCart from "../../assets/img/default-photo.jpg";
import {
  useGetCartQuery,
  useGetPhotosByIdsQuery,
  useDeleteCartItemMutation,
} from "../../templates/services/apiService";

import { makeIdsParam, calcSubtotal } from "./utils";

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.common.white,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CartItemsList({
  classes,
  hideDelete = false,
  disableGutters = false,
}) {
  const { data: cartData = [], isLoading: cartLoading } = useGetCartQuery();
  const [deleteItem] = useDeleteCartItemMutation();

  const idsParam = useMemo(() => makeIdsParam(cartData), [cartData]);
  const { data: photosData, isLoading: photosLoading } = useGetPhotosByIdsQuery(
    idsParam || skipToken,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const subtotal = useMemo(
    () => calcSubtotal(cartData, photosData),
    [cartData, photosData]
  );

  if (cartLoading || photosLoading) {
    return <Typography>Loading…</Typography>;
  }

  return (
    <>
      <Box className={classes.itemListWrapper}>
        {cartData.map((item) => {
          const photo = photosData.find((p) => p.id === item.photoId);
          if (!photo) return null;
          const details = photo.photoDetails.find(
            (d) => d.id === item.photoDetailsId
          );

          return (
            <StyledMenuItem
              key={item.photoDetailsId}
              style={
                disableGutters ? { paddingLeft: 0, paddingRight: 0 } : undefined
              }
            >
              <Box className={classes.photoContainer}>
                <img
                  className={classes.photo}
                  src={photo.path || placeholderPhotoCart}
                  alt={photo.title}
                />
              </Box>
              <Box className={classes.descContainer}>
                <Typography variant="h6" className={classes.title}>
                  {photo.title}
                </Typography>
                <Typography variant="subtitle1" className={classes.size}>
                  {details?.size}
                </Typography>
                <Typography variant="subtitle1" className={classes.price}>
                  €{details?.price?.toFixed(2) ?? "—"}
                </Typography>
              </Box>
              {!hideDelete && (
                <Box
                  className={classes.deleteContainer}
                  onClick={() => deleteItem(item.photoDetailsId)}
                >
                  <DeleteOutlineIcon />
                </Box>
              )}
            </StyledMenuItem>
          );
        })}
      </Box>
      <Divider />
      <Box className={classes.cartMenuBottom}>
        <Box className={classes.subtotal}>
          <Typography variant="h6">Subtotal:</Typography>
          <Typography variant="h6">€{subtotal.toFixed(2)}</Typography>
        </Box>
      </Box>
    </>
  );
}
