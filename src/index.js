import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createI18n, I18nProvider, withI18n } from "react-simple-i18n";

import { langData } from "./langData";
import App from "./App";

import "./index.css";

const routing = (
  <I18nProvider i18n={createI18n(langData, { lang: "en" })}>
    <Router>
      <div>
        <Route path="/" component={withI18n(App)} />
      </div>
    </Router>
  </I18nProvider>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
