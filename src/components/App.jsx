import React from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "./HomePage";
import SinglePhotoPage from "./SinglePhotoPage";

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

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={webshopTheme}>
        <div>
          {/* TODO make a css file to reset to default margin and etc */}
          <CssBaseline />
          <Navigation />
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/sphotopage" component={SinglePhotoPage} />
            </Switch>
          </Router>
          {/* <SinglePhotoPage title="More from this artist" /> */}
          {/* <HomePage /> */}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
