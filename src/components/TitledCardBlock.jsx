import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCard from "./PhotoCard";
import PhotoCardPlaceholder from "./PhotoCardPlaceholder";
import { useGetPhotosQuery } from "../templates/services/apiService";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "57px",
  },
  titledCardBlock: {
    // width: "1400px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  titleBlock: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    // width: "1400px",
    marginBottom: "47px",
  },
}));

const TitledCardBlock = ({ title, numOfRows, defaultFilters }) => {
  const classes = useStyles();

  console.log("TCB init title: ", title);
  console.log("TCB init defaultFilters ", defaultFilters);

  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState("");
  const [parsedFilters, setParsedFilters] = useState("");

  // const { data } = useGetPhotosQuery(parsedFilters);
  // const { data } = useGetPhotosQuery("orientation=landscape&size=4&page=1");
  const { data } = useGetPhotosQuery(filters);

  useEffect(() => {
    console.log("TCB page ", { title, page });
    console.log("TCB filters ", { title, filters });
    console.log("TCB parsedFilters ", { title, parsedFilters });
  }, [title, page, filters, parsedFilters]);

  useEffect(() => {
    for (const [key, value] of Object.entries(defaultFilters)) {
      console.log("TCB parsedFilters mapping: ", { title, parsedFilters });
      setParsedFilters(parsedFilters + `${key}=${value}&`);
    }

    console.log("TCB parsedFilters after loop: ", { title, parsedFilters });
    setFilters(parsedFilters);
  }, [title, defaultFilters]);

  // const returnRows = () => {
  //   let rows = [];
  //   for (let i = 0; i <= numOfRows; i++) {
  //     rows.push(<PhotoCard />);
  //   }
  //   return rows;
  // };

  const handleChangePage = (newPage) => {
    console.log("handleChangePage newPage: ", newPage);
    setPage(newPage);
    setFilters(parsedFilters + `page=${newPage}`);
    console.log("TCB handleChangePage ", { title, filters });
  };

  return (
    <>
      {data && (
        <div className={classes.homeBody}>
          <Grid container className={classes.titledCardBlock}>
            <Grid item className={classes.titleBlock}>
              <Typography variant="h5">{title}</Typography>
              <div>
                <Button
                  disabled={page === 0}
                  onClick={() => handleChangePage(page - 1)}
                >
                  <ArrowBackIcon />
                </Button>
                <Button
                  disabled={page + 1 === data?.totalPages}
                  onClick={() => handleChangePage(page + 1)}
                >
                  <ArrowForwardIcon />
                </Button>
              </div>
            </Grid>
            <Grid item className={classes.titleBlock}>
              {data.content.map((item) => {
                return <PhotoCard key={item?.id} item={item} />;
              })}
              {/* show placeholder if there are no elements for entire row */}
              {[...Array(data.size - data.numberOfElements)].map((e, i) => (
                <PhotoCardPlaceholder key={i} />
              ))}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default TitledCardBlock;
