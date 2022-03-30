import "./App.css";
import React, { useState } from "react";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch  } from "react-router-dom";
import Home from "./pages";
import Footer from "./components/Footer";
import PortFolioPage from "./pages/Portfolio";
import SigninPage from "./pages/signin";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
