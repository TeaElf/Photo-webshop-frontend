import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  Divider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import CartMenu from "./CartMenu";
import { useLogoutMutation } from "../templates/services/apiService";
import { useAuth } from "../auth/useAuth";

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
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { user, ready, refresh } = useAuth();

  if (!ready) return null;

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      await refresh();
      navigate("/");
    } catch (err) {
      console.error("Logout failed: ", err);
    } finally {
    }
  };

  return (
    <div>
      <AppBar color="default">
        <Toolbar className={classes.toolbar}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item xs={12} className={classes.upperbar}>
              <Link color="inherit" href="/" className={classes.logoText}>
                <Typography align="center">PHOTOWEBSHOP</Typography>
              </Link>

              <div className={classes.title}>
                <SearchBar />
              </div>

              {user && (
                <Link href="/submitphoto">
                  <Button className={classes.upperbaritem}>
                    Submit a photo
                  </Button>
                </Link>
              )}

              {/* <Link color="inherit" className={classes.upperbaritem}> */}
              {user && <CartMenu />}
              {/* </Link> */}

              {user && (
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.upperbaritem}
                ></Divider>
              )}

              {!user && (
                <Link href="/signin">
                  <Button variant="contained" className={classes.upperbaritem}>
                    Sign in
                  </Button>
                </Link>
              )}
              {!user && (
                <Link href="/signup">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.upperbaritem}
                  >
                    Join Free
                  </Button>
                </Link>
              )}
              {user && (
                <Link href="/myprofilepage">
                  <Button variant="contained" className={classes.upperbaritem}>
                    My Profile
                  </Button>
                </Link>
              )}
              {user && (
                <Button
                  variant="contained"
                  className={classes.upperbaritem}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
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
