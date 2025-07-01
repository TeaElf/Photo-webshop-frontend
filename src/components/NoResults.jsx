import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "57px",
  },
  titledCardBlock: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginBottom: "47px",
  },
  title: {
    color: "grey",
  },
}));

const NoResults = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeBody}>
      <Grid container className={classes.titledCardBlock}>
        <Box className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h4">
            No results could be found.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default NoResults;
