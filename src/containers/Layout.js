import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Content from "./Content";
import SavedChars from "./SavedChars";
import styles from "../App.module.scss";

class Layout extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Menu}>
          <Header />
          <Nav />
        </div>
        <Switch>
          <Route path="/saved" exact>
            <SavedChars />
          </Route>
          <Route path="/" exact>
            <Content />
          </Route>
        </Switch>
        <CharSheet
        // gender={this.state.gender}
        // race={this.state.race}
        // class={this.state.class}
        // name={this.state.name}
        />
      </div>
    );
  }
}

export default Layout;
