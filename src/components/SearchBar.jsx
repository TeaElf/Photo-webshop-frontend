import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { useGetPhotosQuery } from "../templates/services/apiService";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [triggerValue, setTriggerValue] = useState("");

  // call api for data on every change
  const parsedFilters = `category.name=${triggerValue}`;
  // console.log("parsedFilters for search: ", parsedFilters);
  const { data } = useGetPhotosQuery(parsedFilters);
  useEffect(() => {
    console.log("search useEffect data ", data);
  }, [data]);

  const handleChange = (event) => {
    console.log("handle change value: ", event.target.value);
    setSearchValue(event.target.value);
  };

  const keyPress = (event) => {
    // if enter key was pressed call an api
    if (event.keyCode === 13) {
      setTriggerValue(searchValue);
      navigate(`/resultpage/category.name/${searchValue}`);
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={handleChange}
        onKeyDown={keyPress}
      />
    </div>
  );
};

export default SearchBar;
