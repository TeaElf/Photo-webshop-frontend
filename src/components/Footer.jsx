import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // footerRoot: {
  //   flexGrow: 1,
  //   display: "flex",
  // },
  appBar: {
    bottom: 0,
    position: "relative",
    padding: "7vh 8%",
    backgroundColor: "#F9F9FB",
    color: "black",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      {/* TODO make a css file to reset to default margin and etc */}
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>Footer</Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
