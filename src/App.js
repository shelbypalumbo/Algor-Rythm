import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import AlgoLibrary from "./pages/AlgoLibrary/index";
import Contact from "./pages/Contact/index";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/Algor-Rythm" component={Home} />
        <Route exact path="/AlgoLibrary" component={AlgoLibrary} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}
export default App;
