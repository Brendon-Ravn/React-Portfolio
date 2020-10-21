import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

class App extends Component {
  render() {
    return (
      <>
        <Router>
            <Header />
            <Route exact path="/" component= {About} />
            <Route path="/portfolio" component= {Portfolio} />
            <Route path="/contact" component= {Contact} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
