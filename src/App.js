import React from "react";
import NavigationBar from "./Navbar";
import { Route } from "react-router-dom";
import Info from "./Info";
// import Test from "./Test";
import Projects from "./Projects";
import Journal from "./Journal";

import "./App.css";

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Route exact path="/" component={Info} />
      <Route path="/projects" component={Projects} />
      {/* <Route path="/test" component={Test} /> */}
      <Route path="/journal" component={Journal} />
    </div>
  );
}
