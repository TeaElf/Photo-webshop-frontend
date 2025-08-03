import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
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
import SubmitPhoto from "./SubmitPhoto";
import ProtectedRoute from "../auth/ProtectedRoute";
import SuccessfulPayment from "./cart/SuccessfulPayment";
import CheckoutPage from "./cart/CheckoutPage";

const webshopTheme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
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

const useStyles = makeStyles(() => ({
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const App = () => {
  const classes = useStyles();

  function WithNavigation({ component: ChildComponent }) {
    return (
      <>
        <Navigation />
        <ChildComponent />
      </>
    );
  }

  return (
    <ThemeProvider theme={webshopTheme}>
      <div className={classes.main}>
        {/* TODO make a css file to reset to default margin and etc */}
        <CssBaseline />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<WithNavigation component={HomePage} />}
            />
            <Route
              exact
              path="/resultpage/:key/:value"
              element={<WithNavigation component={ResultPage} />}
            />
            <Route
              exact
              path="/sphotopage/:id"
              element={<WithNavigation component={SinglePhotoPage} />}
            />
            <Route
              exact
              path="/signup"
              element={<WithNavigation component={SignUp} />}
            />
            <Route
              exact
              path="/signin"
              element={<WithNavigation component={SignIn} />}
            />
            <Route
              exact
              path="/forgotpassword"
              element={<WithNavigation component={ForgotPassword} />}
            />
            <Route
              exact
              path="/submitphoto"
              element={
                <ProtectedRoute>
                  <WithNavigation component={SubmitPhoto} />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/myprofilepage"
              element={
                <ProtectedRoute>
                  <WithNavigation component={MyProfilePage} />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/successfulpayment"
              element={<WithNavigation component={SuccessfulPayment} />}
            />
            <Route
              exact
              path="/checkoutpage"
              element={<WithNavigation component={CheckoutPage} />}
            />
          </Routes>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
