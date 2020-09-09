import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
