import { useState } from "react";
import { Button, Box, Menu, Link } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import CartItemsList from "./CartItemsList";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "25em",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    transformOrigin={{ vertical: "top", horizontal: "center" }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  itemListWrapper: {
    marginBottom: theme.spacing(1.5),
  },
  photoContainer: {
    width: "100px",
    height: "100px",
    flexShrink: 0,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  descContainer: {
    display: "grid",
    gridTemplateRows: "auto auto auto",
    rowGap: theme.spacing(0.5),
    paddingLeft: "1em",
    flex: 1,
    minWidth: 0,
    minHeight: "100px",
  },
  title: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    lineHeight: 1.2,
    maxHeight: "2.4em",
  },
  size: {
    color: "#888888",
  },
  price: {
    alignSelf: "end",
  },
  deleteContainer: {
    color: "#FF6767",
    display: "flex",
    height: "100px",
    width: "24px",
    marginLeft: theme.spacing(2),
  },
  cartMenuBottom: {
    padding: "1.25em",
  },
  subtotal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "5px",
  },
  cartCheckoutButton: {
    width: "100%",
  },
}));

export default function CartMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button aria-controls="cart-menu" aria-haspopup onClick={handleClick}>
        <ShoppingCartOutlinedIcon />
      </Button>
      <StyledMenu
        id="cart-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CartItemsList classes={classes} />
        <Link href="/checkoutpage">
          <Button fullWidth variant="contained" color="primary">
            Checkout
          </Button>
        </Link>
      </StyledMenu>
    </Box>
  );
}
