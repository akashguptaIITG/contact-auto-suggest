import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../container/home.js";
import ContactSearchResult from "../container/contact-search-result";

const route = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />;
      <Route exact path="/contact-search" component={ContactSearchResult} />;
      <Route exact path="**" component={Home} />;
    </Switch>
  );
};
export default route;
