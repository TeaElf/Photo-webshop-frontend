import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "./HomePage";
import SinglePhotoPage from "./SinglePhotoPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        {/* <SinglePhotoPage title="More from this artist" /> */}
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
