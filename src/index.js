import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";
import "assets/css/style.css";
import "assets/css/font.min.css";

import App from "views/App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <App {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
