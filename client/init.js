// import '../imports/client/main.js'
import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./src/Less/main.less";
import App from "./src/App.js";

const appRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
Meteor.startup(() => {
  render(appRouter, document.getElementById("root"));
});