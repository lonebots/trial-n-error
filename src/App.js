import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { Help } from "./Help";

import { Nomatch } from "./nomatch";
import { Nabar } from "./components/navbar";

import "./App.css";
function App() {
  return (
    <React.Fragment className="App">
      <Nabar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/help" component={Help} />
          <Route component={Nomatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
