import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Start from "./Start";
import SavedChars from "./SavedChars";

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route component={Start}></Route>
        <Route path="/new" component={Start}></Route>
        <Route path="/saved" exact component={SavedChars}></Route>
      </Switch>
    );
  }
}

export default Content;
