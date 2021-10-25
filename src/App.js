import React from "react";
import Hero from "./comps/Hero";
import Navbar from "./comps/Navbar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PackagePage from "./comps/PackagePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/packages" exact component={PackagePage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
