import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CloseIcon from "@material-ui/icons/Close";
import placeholderPhotoCart from "../assets/img/default-photo.jpg";

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
  },
  placeholderPhotoCart: {
    maxWidth: "100px",
    maxHeight: "100px",
    objectFit: "fill",
  },
  cartMenuBottom: {
    padding: "1.25em",
  },
  cartCheckoutButton: {
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "start",
    width: "100%",
  },
  price: {
    display: "flex",
    justifyContent: "end",
    width: "100%",
  },
}));

const CartMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <StyledMenuItem>
          <img
            className={classes.placeholderPhotoCart}
            src={placeholderPhotoCart}
          />
          <Box className={classes.title}>
            <Typography variant="h6">Title placeholder</Typography>
          </Box>
          <Box className={classes.price}>
            <Typography>Price: $</Typography>
          </Box>
        </StyledMenuItem>
        <Divider />
        <Box className={classes.cartMenuBottom}>
          <Box className={classes.subtotal}>
            <Typography variant="h6">Subtotal: </Typography>
            <Typography variant="h6">$</Typography>
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
