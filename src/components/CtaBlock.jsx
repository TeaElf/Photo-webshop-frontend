import { Button, Typography, Box, Link } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import placeholderBackground from "../assets/img/placeholder-background.png";

const useStyles = makeStyles((theme) => ({
  divBody: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "60px",
    height: "220px",
  },
  block: {
    // width: "1400px",
    width: "100%",
    position: "relative",
    // padding: "40px 20px 40px 20px",
    // padding: "50px 70px 50px 70px",
    boxSizing: "border-box",
    // backgroundColor: "#EEEEEE",
    backgroundColor: "#f3f3f3",
  },
  backgroundImage: {
    width: "100%",
    position: "relative",
    height: "220px",
    objectFit: "cover",
  },
  ctaText: {
    position: "absolute",
    top: "45px",
    marginLeft: "80px",
  },
  textLine: {
    marginBottom: "10px",
    fontWeight: "500",
  },
  ctaButton: {
    marginTop: "10px",
  },
}));

const CtaBlock = () => {
  const classes = useStyles();
  return (
    <div className={classes.divBody}>
      <div className={classes.block}>
        {/* <img
          src={placeholderBackground}
          className={classes.backgroundImage}
          alt="background"
        /> */}
        <Box className={classes.ctaText}>
          <Typography variant="h4" className={classes.textLine}>
            Photographs for sale
          </Typography>
          <Typography variant="body1" className={classes.textLine}>
            Buying signed editions is a great way to start collecting from a
            photographer you love.
          </Typography>
          <Link href="/signup">
            <Button
              color="primary"
              variant="contained"
              className={classes.ctaButton}
            >
              Join Free →
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default CtaBlock;
