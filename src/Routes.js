import React from "react";
import { Route, Switch} from "react-router-dom";
import FrontPage from "./Containers/FrontPage.js";
import InfoForm from "./Containers/InfoForm.js";
import NotFound from './Containers/NotFound.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route path="/home" exact component={FrontPage} />
      <Route path="/InfoForm" exact component={InfoForm} />
      <Route path="/404" component={NotFound} />
    </Switch>
  );
}