import React, { Component } from "react";
import NavigationBar from "./Navbar";
import { Route } from "react-router-dom";
import Info from "./Info";
import Projects from "./Projects";

import "./App.css";

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Route exact path="/" component={Info} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}
