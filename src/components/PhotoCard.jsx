import React from "react";
import defaultPhoto from "../assets/img/default-photo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { handleUndefined } from "../util/stringUtils";

// Style must be the same as in PhotoCardPlaceholder
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

const PhotoCard = ({ item }) => {
  const classes = useStyles();

  // console.log("item in photo card", item);
  return (
    <div className={classes.divContainer}>
      <img
        // src={defaultPhoto}
        src={item?.path}
        alt="default"
        className={clsx(classes.image, classes.marginBottomPhoto)}
      />
      <br />
      <Typography variant="h6">
        {handleUndefined(item?.title, "Title")}
      </Typography>
      <br />
      <Typography variant="subtitle2">
        {item?.photoDetails &&
          handleUndefined(item?.photoDetails[0]?.price, "Price")}
      </Typography>
    </div>
  );
};

export default PhotoCard;
