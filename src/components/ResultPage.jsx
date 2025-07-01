import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import TitledCardBlock from "./TitledCardBlock";
import { makeStyles } from "@material-ui/core/styles";
import { capitalizeText } from "../util/stringUtils";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  resultPageWrapper: {
    display: "flex",
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
    width: "100%",
  },
}));

const ResultPage = () => {
  const classes = useStyles();

  const { key, value } = useParams();

  return (
    <div className={classes.rootWrapper}>
      <div className={classes.resultPageWrapper}>
        <Grid className={classes.divBodyVertical}>
          <TitledCardBlock
            title={capitalizeText(value)}
            numOfRows={4}
            defaultFilters={{ [key]: value, size: 4 }}
          />
        </Grid>
      </div>
    </div>
  );
};

export default ResultPage;
