import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TitledCardBlock from "./TitledCardBlock";
import PhotoDetails from "./PhotoDetails";

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
  divBodyVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

const SinglePhotoPage = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.rootWrapper}>
      <Box className={classes.homePageWrapper}>
        <Grid className={classes.divBodyVertical}>
          <PhotoDetails />
          {/* TODO Change filters */}
          <TitledCardBlock
            title="From this photographer"
            numOfRows={1}
            defaultFilters={{ size: 4 }}
          />
        </Grid>
      </Box>
    </div>
  );
};

export default SinglePhotoPage;
