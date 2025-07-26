import { Grid, Box } from "@material-ui/core";
import TitledCardBlock from "./TitledCardBlock";
import CtaBlock from "./CtaBlock";
import SpecificCategory from "./SpecificCategory";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../auth/useAuth";

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
  const { user } = useAuth();

  return (
    <div className={classes.rootWrapper}>
      <Box className={classes.homePageWrapper}>
        <Grid container className={classes.divBody}>
          <SpecificCategory defaultFilters={{ ["category.name"]: "nature" }} />
          <SpecificCategory
            defaultFilters={{ ["category.name"]: "architecture" }}
          />
        </Grid>

        <Grid className={classes.divBodyVertical}>
          {!user && <CtaBlock />}
          {/* TODO change to Newest */}
          <TitledCardBlock
            title="Landscape"
            numOfRows={1}
            defaultFilters={{ orientation: "landscape", size: 4, page: 0 }}
          />
          {/* TODO change to Most popular */}
          <TitledCardBlock
            title="Sky"
            numOfRows={1}
            defaultFilters={{ title: "sky", size: 4, page: 0 }}
          />
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
