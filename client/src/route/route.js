import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/home/home.jsx";
// import ContactSearchResult from "../component/contact-search-result";

const route = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />;
      {/* <Route exact path="/contact" component={ContactSearchResult} />; */}
      <Route exact path="**" component={Home} />;
    </Switch>
  );
};
export default route;
