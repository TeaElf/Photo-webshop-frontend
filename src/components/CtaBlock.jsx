import { Button, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divBody: {
    display: "flex",
    justifyContent: "center",
  },
  block: {
    width: "1400px",
    padding: "40px 20px 40px 20px",
    boxSizing: "border-box",
  },
}));

const CtaBlock = () => {
  const classes = useStyles();
  return (
    <div className={classes.divBody}>
      <div className={classes.block}>
        <Typography variant="h5">Photographs for sale</Typography>
        <Typography variant="subtitle1">
          Buying signed editions is a great way to start collecting from a
          photographer you love.
        </Typography>
        <Button color="primary" variant="contained">
          Join Free →
        </Button>
      </div>
    </div>
  );
};

export default CtaBlock;
