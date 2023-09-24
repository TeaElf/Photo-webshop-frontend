import { Typography, Button, Grid, Box, Link } from "@material-ui/core";
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { capitalizeText } from "../util/stringUtils";
import { useGetPhotosQuery } from "../templates/services/apiService";

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
  ctaWrapper: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    padding: "50px 70px 50px 70px",
    backgroundImage:
      "linear-gradient(to bottom,rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))",
    backgroundSize: "cover",
  },
  ctaText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
}));

const StyledCtaButton = withStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.3)" },
    padding: 0,
  },
}))(Button);

const SpecificCategory = ({ defaultFilters }) => {
  const classes = useStyles();

  let parsedFilters = "";

  for (const [key, value] of Object.entries(defaultFilters)) {
    parsedFilters = parsedFilters + `${key}=${value}&`;
  }

  console.log("parsedFilters after loop: ", parsedFilters);
  const { data } = useGetPhotosQuery(parsedFilters);

  return (
    <>
      {data && (
        <Grid item className={classes.block}>
          <img
            src={data?.content[0]?.path}
            className={classes.backgroundImage}
            alt="background"
          />
          <Box className={classes.ctaWrapper}>
            <Box className={classes.ctaText}>
              <Typography variant="h4">
                {capitalizeText(Object.values(defaultFilters)[0])}
              </Typography>
              <Typography variant="body1">See photography</Typography>
              <div>
                <Link
                  href={`/resultPage/${Object.keys(defaultFilters)[0]}/${
                    Object.values(defaultFilters)[0]
                  }`}
                >
                  <StyledCtaButton>See more →</StyledCtaButton>
                </Link>
              </div>
            </Box>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default SpecificCategory;
