import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

// Style must be the same as in PhotoCard except visibility
const useStyles = makeStyles((theme) => ({
  divContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    visibility: "hidden",
    height: "360px",
    width: "360px",
    objectFit: "cover",
  },
  marginBottomPhoto: {
    marginBottom: "30px",
  },
}));

const PhotoCardPlaceholder = () => {
  const classes = useStyles();

  return (
    <div className={classes.divContainer}>
      <img src="" className={clsx(classes.image, classes.marginBottomPhoto)} />
      <br />
      <Typography variant="h6"></Typography>
      <br />
      <Typography variant="subtitle2"></Typography>
    </div>
  );
};

export default PhotoCardPlaceholder;
