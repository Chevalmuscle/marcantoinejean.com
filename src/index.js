import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";

import "./index.css";

console.log("°Д°");
console.log("You can see the dev version somewhere using the dev tools...");

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
