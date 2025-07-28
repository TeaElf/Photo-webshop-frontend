import React, { useMemo } from "react";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Menu,
  MenuItem,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import placeholderPhotoCart from "../assets/img/default-photo.jpg";
import {
  useGetCartQuery,
  useGetPhotosQuery,
  useDeleteItemMutation,
} from "../templates/services/apiService";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "25em",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

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

const useStyles = makeStyles((theme) => ({
  subtotal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "5px",
  },
  cartMenuBottom: {
    padding: "1.25em",
  },
  cartCheckoutButton: {
    width: "100%",
  },
  title: {
    width: "100%",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    lineHeight: "2px",
    margin: 0,
    padding: 0,
  },
  size: {
    color: "#888888",
  },
  price: {},
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  photoContainer: {
    width: "100px",
    height: "100px",
    flexShrink: 0,
    overflow: "hidden",
  },
  descContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: "1em",
    flex: 1,
    minWidth: 0,
    height: "100px",
  },
  deleteContainer: {
    display: "flex",
    height: "100px",
    width: "10px",
  },
}));

const CartMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const { data: cartData, isLoading: cartLoading } = useGetCartQuery();
  const [deleteItem] = useDeleteItemMutation();

  const idsParam = useMemo(() => {
    if (!cartData || !cartData.length) return null;
    return cartData.map((item) => item.photoId).join(",");
  }, [cartData]);

  const {
    data: photosData,
    isLoading: photosLoading,
    error: photosError,
  } = useGetPhotosQuery(idsParam ? { ids: idsParam } : skipToken, {
    refetchOnMountOrArgChange: true,
  });

  const subtotal = useMemo(() => {
    if (!cartData || !photosData) return 0;

    return cartData.reduce((sum, item) => {
      const photo = photosData.content.find((p) => p.id === item.photoId);
      if (!photo) return sum;

      const details = photo.photoDetails.find(
        (d) => d.id === item.photoDetailsId
      );

      const price = details?.price ?? 0;
      return sum + price;
    }, 0);
  }, [cartData, photosData]);

  if (cartLoading || photosLoading) return <div>Loading…</div>;
  if (photosError) return <div>Error loading photos</div>;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  return (
    <Box>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ShoppingCartOutlinedIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {cartData &&
          photosData &&
          cartData.map((item) => {
            const photo = photosData.content.find((p) => p.id === item.photoId);

            if (!photo) return null;

            const details = photo.photoDetails.find(
              (d) => d.id === item.photoDetailsId
            );

            return (
              <StyledMenuItem>
                <Box className={classes.photoContainer}>
                  <img
                    className={classes.photo}
                    src={photo.path || placeholderPhotoCart}
                  />
                </Box>
                <Box className={classes.descContainer}>
                  <Box className={classes.title}>
                    <Typography
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal",
                        lineHeight: 1.2,
                        margin: 0,
                        padding: 0,
                      }}
                      variant="h6"
                    >
                      {photo.title}
                    </Typography>
                  </Box>

                  <Box className={classes.size}>
                    <Typography variant="subtitle1">{details?.size}</Typography>
                  </Box>

                  <Box className={classes.price}>
                    <Typography variant="subtitle1">
                      ${details?.price?.toFixed(2) ?? "—"}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.deleteContainer}>
                  <div onClick={() => handleDeleteItem(item.photoDetailsId)}>
                    <DeleteOutlineIcon />
                  </div>
                </Box>
              </StyledMenuItem>
            );
          })}

        <Divider />
        <Box className={classes.cartMenuBottom}>
          <Box className={classes.subtotal}>
            <Typography variant="h6">Subtotal: </Typography>
            <Typography variant="h6">$ {subtotal}</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.cartCheckoutButton}
          >
            Checkout
          </Button>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default CartMenu;
