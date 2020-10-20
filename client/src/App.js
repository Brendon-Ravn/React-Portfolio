import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavTabs />
            <Route exact path="/" component= {About} />
            <Route exact path="/portfolio" component= {Portfolio} />
            <Route path="/contact" component= {Contact} />
          </div>
        </Router>
    );
  }
}

export default App;
