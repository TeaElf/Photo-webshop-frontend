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
import { makeStyles } from "@material-ui/core/styles";
import ResultPage from "./ResultPage";
import CartMenu from "./CartMenu";

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

              {/* <Link color="black" className={classes.upperbaritem}> */}
              <CartMenu />
              {/* </Link> */}

              <Divider
                orientation="vertical"
                flexItem
                className={classes.upperbaritem}
              ></Divider>

              <Link href="/signin">
                <Button variant="contained" className={classes.upperbaritem}>
                  Sign in
                </Button>
              </Link>

              <Link href="/signup">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.upperbaritem}
                >
                  Join Free
                </Button>
              </Link>
            </Grid>
            <br />
            <Grid item xs={6} className={classes.lowerbar}>
              <Link color="inherit" href="/resultpage/category.name/wallpaper">
                <Typography>Wallpaper</Typography>
              </Link>
              <Link color="inherit" href="/resultpage/category.name/nature">
                <Typography>Nature</Typography>
              </Link>
              <Link color="inherit" href="/resultpage/category.name/people">
                <Typography>People</Typography>
              </Link>
              <Link
                color="inherit"
                href="/resultpage/category.name/architecture"
              >
                <Typography>Architecture</Typography>
              </Link>
              <Link color="inherit" href="/resultpage/category.name/macro">
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
