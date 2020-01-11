import React, { Component } from "react";
import Layout from "./containers/Layout";
import Start from "./containers/Start";
import SavedChars from "./containers/SavedChars";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  // state = {
  //   active: ""
  // };

  // handleStartClick = data => {
  //   this.setState({ active: data });
  // };

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/saved" component={SavedChars}></Route>
          <Route path="" component={Start}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;

/* <Layout active={this.state.active}> */

// render={props => (
//   <Start {...props} onStartClick={this.handleStartClick} />
// )}
