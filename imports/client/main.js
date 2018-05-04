import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import '../ui/Less/main.less';
import App from "../ui/App.js";

const appRouter = <BrowserRouter><App /></BrowserRouter>
Meteor.startup(() => {
  render(appRouter, document.getElementById("root"));
});
