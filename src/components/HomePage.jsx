import React from "react";
import { Grid, Box } from "@material-ui/core";
import TitledCardBlock from "./TitledCardBlock";
import CtaBlock from "./CtaBlock";
import SpecificCategory from "./SpecificCategory";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  homePageWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: theme.spacing(12),
    alignItems: "center",
    // width: "1600px",
    width: "80%",
  },
  divBody: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "100px",
  },
  divBodyVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootWrapper}>
      <Box className={classes.homePageWrapper}>
        <Grid container className={classes.divBody}>
          <SpecificCategory category="Nature" />
          <SpecificCategory category="Architecture" />
        </Grid>

        <Grid className={classes.divBodyVertical}>
          <CtaBlock></CtaBlock>
          <TitledCardBlock title="Newest" />
          <TitledCardBlock title="Most popular" />
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
