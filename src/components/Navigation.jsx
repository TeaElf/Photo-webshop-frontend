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
import CartMenu from "./CartMenu";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  upperbar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    minWidth: "80%",
    alignItems: "center",
  },
  lowerbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerbarItem: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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
                <SearchBar />
              </div>

              <Link href="/submitphoto">
                <Button className={classes.upperbaritem}>Submit a photo</Button>
              </Link>

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
            <Grid container item className={classes.lowerbar}>
              <Grid item xs={12} sm="auto" className={classes.lowerbarItem}>
                <Link
                  color="inherit"
                  href="/resultpage/category.name/wallpaper"
                >
                  <Typography>Wallpaper</Typography>
                </Link>
              </Grid>
              <Grid item xs={12} sm="auto" className={classes.lowerbarItem}>
                <Link color="inherit" href="/resultpage/category.name/nature">
                  <Typography>Nature</Typography>
                </Link>
              </Grid>

              <Grid item xs={12} sm="auto" className={classes.lowerbarItem}>
                <Link color="inherit" href="/resultpage/category.name/people">
                  <Typography>People</Typography>
                </Link>
              </Grid>

              <Grid item xs={12} sm="auto" className={classes.lowerbarItem}>
                <Link
                  color="inherit"
                  href="/resultpage/category.name/architecture"
                >
                  <Typography>Architecture</Typography>
                </Link>
              </Grid>

              <Grid item xs={12} sm="auto" className={classes.lowerbarItem}>
                <Link color="inherit" href="/resultpage/category.name/macro">
                  <Typography>Macro</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.navplaceholder}></div>
    </div>
  );
};

export default Navigation;
