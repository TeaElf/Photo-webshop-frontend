import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  Divider,
} from "@material-ui/core";
import SearchBar from "./SearchBar";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  upperbar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    // marginLeft: "5%",
    // marginRight: "5%",
    // width: "90%",
    // width: "1600px",
    minWidth: "80%",
    alignItems: "center",
  },
  lowerbar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "30%",
  },
  toolbar: {
    padding: "20px 0px",
  },
  upperbaritem: {
    margin: "10px",
  },
  navplaceholder: {
    height: "145px",
    backgroundColor: "red",
  },
  // paper: {
  // padding: theme.spacing(2),
  // textAlign: "center",
  //   color: theme.palette.text.secondary,
  // },
  logoText: {
    color: "#000000",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar color="default">
        <Toolbar className={classes.toolbar}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item xs={12} className={classes.upperbar}>
              <Link color="black" href="/" className={classes.logoText}>
                <Typography align="center">PHOTOWEBSHOP</Typography>
              </Link>

              <div className={classes.title}>
                <SearchBar></SearchBar>
              </div>

              <Button className={classes.upperbaritem}>Submit a photo</Button>

              <Link color="black" className={classes.upperbaritem}>
                <ShoppingCartOutlinedIcon />
              </Link>

              <Divider
                orientation="vertical"
                flexItem
                className={classes.upperbaritem}
              ></Divider>

              <Button variant="contained" className={classes.upperbaritem}>
                Sign in
              </Button>

              <Button
                variant="contained"
                color="primary"
                className={classes.upperbaritem}
              >
                Join Free
              </Button>
            </Grid>
            <br />
            <Grid item xs={6} className={classes.lowerbar}>
              <Link color="black">
                <Typography>Wallpaper</Typography>
              </Link>
              <Link color="black">
                <Typography>Nature</Typography>
              </Link>
              <Link color="black">
                <Typography>People</Typography>
              </Link>
              <Link color="black">
                <Typography>Architecture</Typography>
              </Link>
              <Link color="black">
                <Typography>Macro</Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.navplaceholder}></div>
    </div>
  );
};

export default Navigation;
