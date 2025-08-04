import clsx from "clsx";
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { handleUndefined } from "../util/stringUtils";

// Style must be the same as in PhotoCardPlaceholder
const useStyles = makeStyles(() => ({
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

  return (
    <Link href={`/sphotopage/${item.id}`} className={classes.linkStyle}>
      <div className={classes.divContainer}>
        <img
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
            "€" +
              handleUndefined(item?.photoDetails[0]?.price, "Price").toFixed(2)}
        </Typography>
      </div>
    </Link>
  );
};

export default PhotoCard;
