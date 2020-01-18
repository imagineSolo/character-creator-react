import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Content from "./Content";
import SavedChars from "./SavedChars";
import styles from "../App.module.scss";

class Layout extends Component {
  state = {
    active: "start",
    gender: "",
    race: "",
    class: "",
    nameSaved: "",
    backgroundSaved: "",
    avatar: "",
    attributes: {},
    skills: {},
    traits: [],
    story: ""
  };

  passAppState = clicked => {
    this.setState({
      active: clicked
    });
  };

  handleBack = state => {
    if (state === "gender") {
      this.setState({
        ...this.state,
        active: "start",
        gender: ""
      });
    }
    if (state === "race") {
      this.setState({
        ...this.state,
        active: "gender",
        gender: "",
        race: ""
      });
    }
    if (state === "class") {
      this.setState({
        ...this.state,
        active: "race",
        race: "",
        class: ""
      });
    }
    if (state === "name") {
      this.setState({
        ...this.state,
        active: "class",
        class: "",
        name: ""
      });
    }
    if (state === "backgroundSaved") {
      this.setState({
        ...this.state,
        active: "name",
        name: "",
        backgroundSaved: ""
      });
    }
  };

  handleGenderFemale = () => {
    this.setState({
      ...this.state,
      active: "race",
      gender: "Female"
    });
  };

  handleGenderMale = () => {
    this.setState({
      ...this.state,
      active: "race",
      gender: "Male"
    });
  };

  handleRaceSelect = e => {
    this.setState({
      ...this.state,
      active: "class",
      race: e.target.id
    });
  };

  handleClassSelect = e => {
    this.setState({
      ...this.state,
      active: "name",
      class: e.target.id
    });
  };

  handleNameSubmit = name => {
    this.setState({
      ...this.state,
      active: "backgroundSaved",
      nameSaved: name
    });
  };

  handleBackgroundSubmit = (prof, e) => {
    e.preventDefault();
    if (prof === "") {
      alert("Select your background.");
    } else {
      this.setState({
        ...this.state,
        active: "avatar",
        backgroundSaved: prof
      });
    }
  };

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
            <Content
              active={this.state.active}
              undo={this.handleBack}
              passAppState={this.passAppState}
              female={this.handleGenderFemale}
              male={this.handleGenderMale}
              selectRace={this.handleRaceSelect}
              selectClass={this.handleClassSelect}
              submitName={this.handleNameSubmit}
              submitBackground={this.handleBackgroundSubmit}
            />
          </Route>
        </Switch>
        <CharSheet
          gender={this.state.gender}
          race={this.state.race}
          class={this.state.class}
          name={this.state.nameSaved}
          background={this.state.backgroundSaved}
        />
      </div>
    );
  }
}

export default Layout;
