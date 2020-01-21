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
    arcana: false,
    athletics: false,
    crafting: false,
    deception: false,
    history: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    stealth: false,
    survival: false,
    trickery: false,
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
    console.log(prof);
    e.preventDefault();
    if (prof === "") {
      alert("Select your background.");
    } else {
      switch (prof) {
        case "Commoner":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            athletics: true,
            crafting: true
          });
          break;
        case "Courtier":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            deception: true,
            persuasion: true
          });
          break;
        case "Criminal":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            intimidation: true,
            trickery: true
          });
          break;
        case "Entertainer":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            athletics: true,
            performance: true
          });
          break;
        case "Investigator":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            investigation: true,
            stealth: true
          });
          break;
        case "Outlander":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            nature: true,
            survival: true
          });
          break;
        case "Sage":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            arcana: true,
            history: true
          });
          break;
        case "Soldier":
          this.setState({
            ...this.state,
            active: "avatar",
            backgroundSaved: prof,
            athletics: true,
            intimidation: true
          });
          break;
        default:
          console.log("Default");
      }
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
          arcana={this.state.arcana}
          athletics={this.state.athletics}
          crafting={this.state.crafting}
          deception={this.state.deception}
          history={this.state.history}
          intimidation={this.state.intimidation}
          investigation={this.state.investigation}
          medicine={this.state.medicine}
          nature={this.state.nature}
          perception={this.state.perception}
          performance={this.state.performance}
          persuasion={this.state.persuasion}
          religion={this.state.religion}
          stealth={this.state.stealth}
          survival={this.state.survival}
          trickery={this.state.trickery}
        />
      </div>
    );
  }
}

export default Layout;
