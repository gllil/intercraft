import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
