import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import AlgoLibrary from "./pages/AlgoLibrary/index";
import Contact from "./pages/Contact/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Algor-Rythm" component={Home} />
        <Route exact path="/AlgoLibrary" component={AlgoLibrary} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
