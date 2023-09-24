import React from "react";
import { Grid, Box } from "@material-ui/core";
import TitledCardBlock from "./TitledCardBlock";
import CtaBlock from "./CtaBlock";
import SpecificCategory from "./SpecificCategory";
import { makeStyles } from "@material-ui/core/styles";
// import { useGetPhotosQuery } from "../templates/services/apiService";

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
  // image: {
  //   maxWidth: "400px",
  //   maxHeight: "400px",
  // },
}));

const HomePage = () => {
  const classes = useStyles();
  // const { data } = useGetPhotosQuery();
  // useEffect(() => {
  //   console.log("data ", data);
  // }, [data]);
  return (
    // <>
    //   {data && (
    //     <>
    //       {data.content.map((item) => {
    //         return (
    //           <div>
    //             <img
    //               src={item.path}
    //               alt={item.title}
    //               className={classes.image}
    //             />
    //           </div>
    //         );
    //       })}
    <div className={classes.rootWrapper}>
      <Box className={classes.homePageWrapper}>
        <Grid container className={classes.divBody}>
          <SpecificCategory defaultFilters={{ ["category.name"]: "nature" }} />
          <SpecificCategory
            defaultFilters={{ ["category.name"]: "architecture" }}
          />
        </Grid>

        <Grid className={classes.divBodyVertical}>
          <CtaBlock></CtaBlock>
          {/* TODO change to Newest */}
          <TitledCardBlock
            title="Landscape"
            numOfRows={1}
            defaultFilters={{ orientation: "landscape", size: 4 }}
          />
          {/* TODO change to Most popular */}
          <TitledCardBlock
            title="Sky"
            numOfRows={1}
            defaultFilters={{ title: "sky", size: 4 }}
          />
        </Grid>
      </Box>
    </div>
    //     </>
    //   )}
    // </>
  );
};

export default HomePage;
