import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Content from "./Content";
import SavedChars from "./SavedChars";
import blank from "../images/blank.png";
import styles from "../App.module.scss";

class Layout extends Component {
  state = {
    active: "start",
    gender: "",
    race: "",
    class: "",
    nameSaved: "",
    backgroundSaved: "",
    avatar: blank,
    attributes: {
      strength: 10,
      dexterity: 10,
      toughness: 10,
      intelligence: 10,
      willpower: 10,
      charisma: 10
    },
    attributesPool: 5,
    skills: {
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
      trickery: false
    },
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
    if (state === "avatar") {
      this.setState({
        ...this.state,
        active: "backgroundSaved",
        backgroundSaved: "",
        avatar: "",
        skills: {
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
          trickery: false
        }
      });
    }
    if (state.active === "attributes") {
      this.setState({
        ...this.state,
        active: "avatar",
        avatar: "",
        attributes: ""
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
      let updatedState = { ...this.state };
      switch (prof) {
        case "Commoner":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.athletics = true;
          updatedState.skills.crafting = true;
          break;
        case "Courtier":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.deception = true;
          updatedState.skills.persuasion = true;
          break;
        case "Criminal":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.intimidation = true;
          updatedState.skills.trickery = true;
          break;
        case "Entertainer":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.athletics = true;
          updatedState.skills.performance = true;
          break;
        case "Investigator":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.investigation = true;
          updatedState.skills.perception = true;
          break;
        case "Outlander":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.nature = true;
          updatedState.skills.survival = true;
          break;
        case "Sage":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.arcana = true;
          updatedState.skills.history = true;
          break;
        case "Soldier":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          updatedState.skills.athletics = true;
          updatedState.skills.intimidation = true;
          break;
        default:
          console.log("Default");
      }
      this.setState({
        ...this.state,
        active: "avatar",
        backgroundSaved: prof,
        updatedState
      });
    }
  };

  handlePortraitSelect = e => {
    this.setState({
      ...this.state,
      active: "attributes",
      avatar: e.target.src
    });
  };

  handleIncreaseAttribute = e => {
    let updatedState = { ...this.state };
    switch (e) {
      case "str":
        updatedState.attributes.strength++;
        break;
      case "dex":
        updatedState.attributes.dexterity++;
        break;
      case "tou":
        updatedState.attributes.toughness++;
        break;
      case "int":
        updatedState.attributes.intelligence++;
        break;
      case "will":
        updatedState.attributes.willpower++;
        break;
      case "cha":
        updatedState.attributes.charisma++;
        break;
      default:
    }
    this.setState({
      updatedState
    });
  };

  handleDecreaseAttribute = e => {
    let updatedState = { ...this.state };
    switch (e) {
      case "str":
        updatedState.attributes.strength--;
        break;
      case "dex":
        updatedState.attributes.dexterity--;
        break;
      case "tou":
        updatedState.attributes.toughness--;
        break;
      case "int":
        updatedState.attributes.intelligence--;
        break;
      case "will":
        updatedState.attributes.willpower--;
        break;
      case "cha":
        updatedState.attributes.charisma--;
        break;
      default:
    }
    this.setState({
      updatedState
    });
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
              gender={this.state.gender}
              race={this.state.race}
              selectPortrait={this.handlePortraitSelect}
              strength={this.state.attributes.strength}
              dexterity={this.state.attributes.dexterity}
              toughness={this.state.attributes.toughness}
              intelligence={this.state.attributes.intelligence}
              willpower={this.state.attributes.willpower}
              charisma={this.state.attributes.charisma}
              pool={this.state.attributesPool}
              increment={this.handleIncreaseAttribute}
              decrement={this.handleDecreaseAttribute}
            />
          </Route>
        </Switch>
        <CharSheet
          gender={this.state.gender}
          race={this.state.race}
          class={this.state.class}
          name={this.state.nameSaved}
          background={this.state.backgroundSaved}
          skills={this.state.skills}
          attributes={this.state.attributes}
          avatar={this.state.avatar}
        />
      </div>
    );
  }
}

export default Layout;
