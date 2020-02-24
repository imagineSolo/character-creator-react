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
    skillsPool: 3,
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
        class: "",
        attributes: {
          strength: 10,
          dexterity: 10,
          toughness: 10,
          intelligence: 10,
          willpower: 10,
          charisma: 10
        },
        attributesPool: 5
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
      this.setState(prevState => ({
        ...this.state,
        active: "backgroundSaved",
        backgroundSaved: "",
        avatar: blank,
        skills: prevState.skills
      }));
    }
    if (state === "attributes") {
      this.setState(prevState => ({
        ...this.state,
        active: "avatar",
        avatar: blank,
        attributes: prevState.attributes
      }));
    }
    if (state === "skills") {
      this.setState(prevState => ({
        ...this.state,
        active: "attributes",
        attributes: prevState.attributes
      }));
    }
    if (state === "traits") {
      this.setState(prevState => ({
        ...prevState,
        active: "skills",
        traits: [],
        ...prevState.skills,
        skills: prevState.skills
      }));
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
    let updatedState = { ...this.state };
    switch (e.target.id) {
      case "Human":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        updatedState.attributesPool = updatedState.attributesPool + 2;
        updatedState.attributes.willpower--;
        break;
      case "Elf":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        updatedState.attributes.dexterity++;
        updatedState.attributes.intelligence++;
        updatedState.attributes.toughness--;
        break;
      case "Dwarf":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        updatedState.attributes.dexterity--;
        updatedState.attributes.strength++;
        updatedState.attributes.toughness++;
        break;
      case "Halfling":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        updatedState.attributes.dexterity++;
        updatedState.attributes.willpower++;
        updatedState.attributes.strength--;
        break;
      case "Tiefling":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        updatedState.attributes.charisma++;
        updatedState.attributes.intelligence++;
        updatedState.attributes.willpower--;
        break;
      default:
    }
    this.setState({
      ...this.state,
      active: "class",
      race: e.target.id,
      attributesPool: updatedState.attributesPool,
      updatedState
    });
  };

  handleClassSelect = e => {
    let updatedState = { ...this.state };
    switch (e.target.id) {
      case "Warrior":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        updatedState.attributes.strength++;
        updatedState.attributes.toughness++;
        updatedState.skills.intimidation = true;
        break;
      case "Wizard":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        updatedState.attributes.intelligence =
          updatedState.attributes.intelligence + 2;
        updatedState.skills.arcana = true;
        break;
      case "Rogue":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        updatedState.attributes.dexterity =
          updatedState.attributes.dexterity + 2;
        updatedState.skills.stealth = true;
        break;
      case "Cleric":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        updatedState.attributes.willpower =
          updatedState.attributes.willpower + 2;
        updatedState.skills.religion = true;
        break;
      case "Ranger":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        updatedState.attributes.dexterity++;
        updatedState.attributes.toughness++;
        updatedState.skills.nature = true;
        break;
      default:
    }
    this.setState({
      ...this.state,
      active: "name",
      class: e.target.id,
      updatedState
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
          if (this.state.class === "Warrior") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedState.skills.intimidation = true;
          }
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
          if (this.state.class === "Ranger") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedState.skills.nature = true;
          }
          updatedState.skills.survival = true;
          break;
        case "Sage":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          if (this.state.class === "Wizard") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedState.skills.arcana = true;
          }
          updatedState.skills.history = true;
          break;
        case "Soldier":
          updatedState.active = "avatar";
          updatedState.backgroundSaved = prof;
          if (this.state.class === "Warrior") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedState.skills.intimidation = true;
          }
          updatedState.skills.athletics = true;
          break;
        default:
          console.log("Default");
      }
      this.setState({
        ...this.state,
        active: "avatar",
        backgroundSaved: prof,
        skillsPool: updatedState.skillsPool,
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

  handleIncreaseAttribute = attr => {
    let updatedState = { ...this.state };
    if (
      attr === "strength" &&
      updatedState.attributes.strength <= 19 &&
      updatedState.attributesPool >= 1
    ) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            strength: this.state.attributes.strength + 1
          },
          attributesPool: prevState.attributesPool - 1
        };
      });
    } else if (
      attr === "dexterity" &&
      updatedState.attributes.dexterity <= 19 &&
      updatedState.attributesPool >= 1
    ) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            dexterity: this.state.attributes.dexterity + 1
          },
          attributesPool: prevState.attributesPool - 1
        };
      });
    } else if (
      attr === "toughness" &&
      updatedState.attributes.toughness <= 19 &&
      updatedState.attributesPool >= 1
    ) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            toughness: this.state.attributes.toughness + 1
          },
          attributesPool: prevState.attributesPool - 1
        };
      });
    } else if (
      attr === "intelligence" &&
      updatedState.attributes.intelligence <= 19 &&
      updatedState.attributesPool >= 1
    ) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            intelligence: this.state.attributes.intelligence + 1
          },
          attributesPool: prevState.attributesPool - 1
        };
      });
    } else if (
      attr === "willpower" &&
      updatedState.attributes.willpower <= 19 &&
      updatedState.attributesPool >= 1
    ) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            willpower: this.state.attributes.willpower + 1
          },
          attributesPool: prevState.attributesPool - 1
        };
      });
    } else if (
      attr === "charisma" &&
      updatedState.attributes.charisma <= 19 &&
      updatedState.attributesPool >= 1
    ) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            charisma: this.state.attributes.charisma + 1
          },
          attributesPool: prevState.attributesPool - 1
        };
      });
    }
  };

  handleDecreaseAttribute = attr => {
    let updatedState = { ...this.state };
    if (attr === "strength" && updatedState.attributes.strength >= 4) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            strength: this.state.attributes.strength - 1
          },
          attributesPool: prevState.attributesPool + 1
        };
      });
    } else if (attr === "dexterity" && updatedState.attributes.dexterity >= 4) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            dexterity: this.state.attributes.dexterity - 1
          },
          attributesPool: prevState.attributesPool + 1
        };
      });
    } else if (attr === "toughness" && updatedState.attributes.toughness >= 4) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            toughness: this.state.attributes.toughness - 1
          },
          attributesPool: prevState.attributesPool + 1
        };
      });
    } else if (
      attr === "intelligence" &&
      updatedState.attributes.intelligence >= 4
    ) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            intelligence: this.state.attributes.intelligence - 1
          },
          attributesPool: prevState.attributesPool + 1
        };
      });
    } else if (attr === "willpower" && updatedState.attributes.willpower >= 4) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            willpower: this.state.attributes.willpower - 1
          },
          attributesPool: prevState.attributesPool + 1
        };
      });
    } else if (attr === "charisma" && updatedState.attributes.charisma >= 4) {
      this.setState(prevState => {
        return {
          updatedState,
          attributes: {
            ...this.state.attributes,
            charisma: this.state.attributes.charisma - 1
          },
          attributesPool: prevState.attributesPool + 1
        };
      });
    }
  };

  applyChangesAttributes = () => {
    if (this.state.attributesPool <= 0) {
      this.setState({
        ...this.state,
        active: "skills"
      });
    } else {
      alert("You have points left to spend!");
    }
  };

  applyChangesSkills = (skill, pool) => {
    const addedSkills = this.handleAddSkills(skill);
    if (pool <= 0) {
      this.setState({
        ...this.state,
        active: "traits",
        skills: {
          ...this.state.skills,
          ...addedSkills
        }
      });
    } else {
      alert("You have skill points left to spend!");
    }
  };

  handleAddSkills = skills => {
    let newSkills = {};
    for (let key in skills) {
      if (skills[key]) {
        newSkills[key] = true;
      }
    }
    return newSkills;
  };

  applyChangesTraits = traits => {
    this.setState({
      active: "story",
      traits
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
              attributes={this.state.attributes}
              skills={this.state.skills}
              skillsPool={this.state.skillsPool}
              pool={this.state.attributesPool}
              increment={this.handleIncreaseAttribute}
              decrement={this.handleDecreaseAttribute}
              submitSkills={this.handleSkillsSubmit}
              applyAttributes={this.applyChangesAttributes}
              applySkills={this.applyChangesSkills}
              applyTraits={this.applyChangesTraits}
              story={this.state.story}
            />
          </Route>
        </Switch>
        <CharSheet
          gender={this.state.gender}
          race={this.state.race}
          class={this.state.class}
          name={this.state.nameSaved}
          avatar={this.state.avatar}
          background={this.state.backgroundSaved}
          attributes={this.state.attributes}
          skills={this.state.skills}
          traits={this.state.traits}
        />
      </div>
    );
  }
}

export default Layout;
