import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Link,
  makeStyles,
} from "@material-ui/core";

import { useAuth } from "../../auth/useAuth";
import { useClearCartMutation } from "../../templates/services/apiService";

import useCart from "./useCart";
import CartItemsList from "./CartItemsList";

const useStyles = makeStyles((theme) => ({
  itemListWrapper: {
    marginBottom: theme.spacing(2.5),
  },
  photoContainer: {
    width: "100px",
    height: "100px",
    flexShrink: 0,
    overflow: "hidden",
    marginLeft: 0,
    paddingLeft: 0,
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
    height: "100px",
    width: "24px",
    marginLeft: theme.spacing(2),
  },
  cartMenuBottom: {
    paddingTop: "1.25em",
    paddingBottom: "1.25em",
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
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
  },
  headerWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
  },
  clearButton: {
    color: "#FF6767",
  },
  billingWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
  },
  billingHeader: {
    marginBottom: theme.spacing(4),
  },
  billingName: {
    fontWeight: "600",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  billingEmail: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  bottomWrapper: {
    marginTop: theme.spacing(3),
  },
}));

export default function CheckoutPage() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { user } = useAuth();
  const { cartData, loading } = useCart();
  const [clearCart] = useClearCartMutation();

  useEffect(() => {
    if (!loading && cartData.length === 0) {
      navigate("/");
    }
  }, [loading, cartData, navigate]);

  if (!user) return null;

  if (loading) {
    return (
      <Container className={classes.container} maxWidth="xs">
        <Typography>Loading your cart…</Typography>
      </Container>
    );
  }

  return (
    <Container className={classes.container} maxWidth="xs">
      <Box className={classes.headerWrapper}>
        <Typography variant="h5">Your Order</Typography>
        <Button className={classes.clearButton} onClick={clearCart}>
          Clear cart
        </Button>
      </Box>

      <CartItemsList classes={classes} disableGutters={true} />
      <Divider />
      <Box className={classes.billingWrapper}>
        <Typography className={classes.billingHeader} variant="h5">
          Billing Information
        </Typography>
        <Typography className={classes.billingName}>
          {user.name} {user.surname}
        </Typography>
        <Typography className={classes.billingEmail}>{user.email}</Typography>
      </Box>
      <Divider />

      <Box className={classes.bottomWrapper}>
        <Link href="/successfulpayment">
          <Button fullWidth variant="contained" color="primary">
            Continue with Paypal
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
