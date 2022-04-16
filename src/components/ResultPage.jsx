import React from "react";
import { Grid, Box } from "@material-ui/core";
import TitledCardBlock from "./TitledCardBlock";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  resultPageWrapper: {
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

const ResultPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootWrapper}>
      <Box className={classes.resultPageWrapper}>
        <Grid className={classes.divBodyVertical}>
          <TitledCardBlock title="Wallpaper" numOfRows={4} />
        </Grid>
      </Box>
    </div>
  );
};

export default ResultPage;
