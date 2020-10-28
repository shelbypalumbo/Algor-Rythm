import React from "react";
import Home from "./pages/Home/index";
import Publications from "./pages/Publications/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/Algor-Rythm" component={Home} />
        <Route exact path="/Publications" component={Publications} />
      </Switch>
    </Router>
  );
}
export default App;
