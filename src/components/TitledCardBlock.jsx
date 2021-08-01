import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCard from "./PhotoCard";

const useStyles = makeStyles((theme) => ({
  titleBlock: {
    display: "flex",
    justifyContent: "space-between",
    width: "1400px",
  },
  homeBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titledCardBlock: {
    width: "1400px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const TitledCardBlock = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeBody}>
      <Grid container className={classes.titledCardBlock}>
        <Grid item className={classes.titleBlock}>
          <Typography variant="h5">Title</Typography>
          <div>
            <Button disabled>
              <ArrowBackIcon />
            </Button>
            <Button>
              <ArrowForwardIcon />
            </Button>
          </div>
        </Grid>
        <Grid item className={classes.titleBlock}>
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default TitledCardBlock;
