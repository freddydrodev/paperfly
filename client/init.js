// import '../imports/client/main.js'
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./src/Less/main.less";
import App from "./src/App.js";

const appRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

Tracker.autorun(() => {
  const browserHistory = createBrowserHistory();

  browserHistory.listen((location) => {
    console.log("location is: " + location);
  });

  console.log('object');
});
Meteor.startup(() => {
  render(appRouter, document.getElementById("root"));
});
