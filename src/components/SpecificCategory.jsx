import { Typography, Button, Grid, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import placeholderBackground from "../assets/img/placeholder-background.png";

const useStyles = makeStyles((theme) => ({
  block: {
    position: "relative",
    boxSizing: "border-box",
  },
  backgroundImage: {
    position: "relative",
    height: "220px",
    width: "800px",
    objectFit: "cover",
  },
  ctaText: {
    position: "absolute",
    top: "50px",
    marginLeft: "80px",
  },
}));

const SpecificCategory = ({ category }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.block}>
      <img
        src={placeholderBackground}
        className={classes.backgroundImage}
        alt="background"
      />
      <Box className={classes.ctaText}>
        <Typography variant="h4">{category}</Typography>
        <Typography variant="body1">See photography</Typography>
        <Button>See more →</Button>
      </Box>
    </Grid>
  );
};

export default SpecificCategory;
