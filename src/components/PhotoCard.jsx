import React from "react";
import defaultPhoto from "../assets/img/default-photo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: "250px",
  },
}));

const PhotoCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.divContainer}>
      <img src={defaultPhoto} alt="default" className={classes.image} />
      <br />
      <Typography variant="h6">Title</Typography>
      <br />
      <Typography variant="subtitle2">Price</Typography>
    </div>
  );
};

export default PhotoCard;
