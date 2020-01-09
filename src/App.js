import React, { Component } from "react";
import Layout from "./containers/Layout";
import Start from "./containers/Start";
import SavedChars from "./containers/SavedChars";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    data: ""
  };
  handleStart = data => {
    console.log("App.js clicked");
    this.setState({ data });
  };
  render() {
    return (
      <Layout clicked={this.state.data}>
        <Switch>
          <Route path="/saved" component={SavedChars}></Route>
          <Route
            path=""
            render={props => <Start {...props} start={this.handleStart} />}
          ></Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
