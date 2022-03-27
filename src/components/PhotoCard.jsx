import React from "react";
import defaultPhoto from "../assets/img/default-photo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: "360px",
    width: "360px",
    objectFit: "cover",
  },
  marginBottomPhoto: {
    marginBottom: "30px",
  },
}));

const PhotoCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.divContainer}>
      <img
        src={defaultPhoto}
        alt="default"
        className={clsx(classes.image, classes.marginBottomPhoto)}
      />
      <br />
      <Typography variant="h6">Title</Typography>
      <br />
      <Typography variant="subtitle2">Price</Typography>
    </div>
  );
};

export default PhotoCard;
