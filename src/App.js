import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import ContactUs from "./components/contactus";
import Banner from "./components/banner";
import Grid from "./components/grid";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Banner />
      </div>
      <br />
      <div className="container">
        <Route path="/" exact component={Grid} />
        <br />
      </div>
      <br />
      <div className="container">
        <Route path="/contact" exact component={ContactUs} />
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
