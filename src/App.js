import React, { Component } from "react";
import Layout from "./containers/Layout";
import Start from "./containers/Start";
import SavedChars from "./containers/SavedChars";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/saved" component={SavedChars}></Route>
          <Route
            path=""
            exact
            render={props => <Start {...props} start={this.props.start} />}
          ></Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
