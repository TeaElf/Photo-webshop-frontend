import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "./HomePage";
import ResultPage from "./ResultPage";
import SinglePhotoPage from "./SinglePhotoPage";
import SignIn from "./account/SignIn";
import { makeStyles } from "@material-ui/core/styles";
import SignUp from "./account/SignUp";
import ForgotPassword from "./account/ForgotPassword";
import MyProfilePage from "./MyProfilePage";

const webshopTheme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#595CFF",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

// class App extends React.Component {
const App = () => {
  // render() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={webshopTheme}>
      <div className={classes.main}>
        {/* TODO make a css file to reset to default margin and etc */}
        <CssBaseline />
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/resultpage" component={ResultPage} />
            <Route exact path="/sphotopage" component={SinglePhotoPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/myprofilepage" component={MyProfilePage} />
          </Switch>
        </Router>
        {/* <SinglePhotoPage title="More from this artist" /> */}
        {/* <HomePage /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
  // }
};

export default App;
