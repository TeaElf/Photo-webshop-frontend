import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCard from "./PhotoCard";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "57px",
  },
  titledCardBlock: {
    // width: "1400px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  titleBlock: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    // width: "1400px",
    marginBottom: "47px",
  },
}));

const TitledCardBlock = ({ title, numOfRows }) => {
  const classes = useStyles();
  // const returnRows = () => {
  //   let rows = [];
  //   for (let i = 0; i <= numOfRows; i++) {
  //     rows.push(<PhotoCard />);
  //   }
  //   return rows;
  // };
  return (
    <div className={classes.homeBody}>
      <Grid container className={classes.titledCardBlock}>
        <Grid item className={classes.titleBlock}>
          <Typography variant="h5">{title}</Typography>
          <div>
            <Button disabled>
              <ArrowBackIcon />
            </Button>
            <Button>
              <ArrowForwardIcon />
            </Button>
          </div>
        </Grid>
        {numOfRows === 1 && (
          <Grid item className={classes.titleBlock}>
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
          </Grid>
        )}
        {numOfRows === 4 && (
          <>
            <Grid item className={classes.titleBlock}>
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
            </Grid>
            <Grid item className={classes.titleBlock}>
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
            </Grid>
            <Grid item className={classes.titleBlock}>
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default TitledCardBlock;
