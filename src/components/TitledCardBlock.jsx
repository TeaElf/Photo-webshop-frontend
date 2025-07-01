import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCard from "./PhotoCard";
import PhotoCardPlaceholder from "./PhotoCardPlaceholder";
import { useGetPhotosQuery } from "../templates/services/apiService";
import NoResults from "./NoResults";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "57px",
    minHeight: "614px",
  },
  titledCardBlock: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  titleBlock: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "47px",
  },
}));

const TitledCardBlock = ({ title, numOfRows, defaultFilters }) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState(() => ({ ...defaultFilters }));

  useEffect(() => {
    setFilters({ ...defaultFilters });
    setPage(0);
  }, [defaultFilters]);

  const { data } = useGetPhotosQuery(filters);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: newPage,
    }));
  };

  return (
    <>
      {data && (
        <div className={classes.homeBody}>
          <Grid container className={classes.titledCardBlock}>
            <Grid item className={classes.titleBlock}>
              <Typography variant="h5">{title}</Typography>
              {data.totalPages > 1 && (
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
              )}
            </Grid>
            <Grid item className={classes.titleBlock}>
              {data.totalElements > 0 &&
                data.content.map((item) => {
                  return <PhotoCard key={item?.id} item={item} />;
                })}
              {/* show placeholder if there are no elements for entire row */}
              {data.totalElements > 0 &&
                [...Array(data.size - data.numberOfElements)].map((e, i) => (
                  <PhotoCardPlaceholder key={i} />
                ))}
              {data && data.totalElements === 0 && <NoResults />}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default TitledCardBlock;
