import React, { Component, components } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contacts from "./components/contacts/Contacts";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/Jeopardy/Jeopardy";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Carl" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/jeopardy" component={Jeopardy} />
      </div>
    );
  }
}

export default App;
