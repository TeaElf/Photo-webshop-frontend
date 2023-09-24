import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import clsx from "clsx";
import { handleUndefined, handlePrice } from "../util/stringUtils";

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
  linkStyle: {
    color: "#000000",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const PhotoCard = ({ item }) => {
  const classes = useStyles();

  // console.log("item in photo card", item);
  return (
    <Link href={`/sphotopage/${item.id}`} className={classes.linkStyle}>
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
    </Link>
  );
};

export default PhotoCard;
