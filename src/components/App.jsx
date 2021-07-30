import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        App
        <Footer />
      </div>
    );
  }
}

export default App;
