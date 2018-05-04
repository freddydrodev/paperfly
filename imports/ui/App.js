import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import mainRoutes from "./Routes/MainRoutes.js";

class App extends Component {
  render() {
    return (
      <Switch>
        {mainRoutes.map(params => <Route {...params} key={params.title} />)}
      </Switch>
    );
  }
}

export default App;
