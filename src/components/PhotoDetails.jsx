import { Button, Divider, Typography, Link } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultPhoto from "../assets/img/default-photo.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: "450px",
    width: "400px",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
  },
}));

const PhotoDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.divContainer}>
      <div>
        <div className={classes.imageContainer}>
          <img src={defaultPhoto} alt="default" className={classes.image} />
          <div>
            <Typography variant="h5">Product Name</Typography>
            <Typography variant="h4">$4.99 - $12.99</Typography>
            <Divider />
            <Typography variant="subtitle1">Dimensions:</Typography>
            <Button color="primary" variant="contained">
              Add to cart
            </Button>
            <Link color="black" className={classes.upperbaritem}>
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
        <Typography variant="subtitle1">Description:</Typography>
        <Typography variant="subtitle2">Nature from above</Typography>
        <Typography variant="subtitle1">Tags:</Typography>
        <Typography variant="subtitle2">#wallpaper #flower #spring</Typography>
      </div>
    </div>
  );
};

export default PhotoDetails;
