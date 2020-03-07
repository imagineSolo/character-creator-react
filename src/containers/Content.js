import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import Modal from "../components/Modal/Modal";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Steps from "./Steps";
import SavedChars from "./SavedChars";
import blank from "../images/blank_01.png";
import styles from "../App.module.scss";

class Content extends Component {
  state = {
    active: "start",
    gender: "",
    race: "",
    class: "",
    nameSaved: "",
    backgroundSaved: "",
    avatar: blank,
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
    story: "",
    modal: {
      show: false,
      message: "Alert"
    }
  };

  passAppState = clicked => {
    this.setState({
      active: clicked
    });
  };

  handleBack = state => {
    let updatedState = { ...this.state };

    if (state === "gender") {
      updatedState.active = "start";
      updatedState.gender = "";
    }
    if (state === "race") {
      updatedState.active = "gender";
      updatedState.gender = "";
      updatedState.race = "";
    }
    if (state === "class") {
      updatedState.active = "race";
      updatedState.race = "";
      updatedState.class = "";
    }
    if (state === "name") {
      updatedState.active = "class";
      updatedState.class = "";
      updatedState.nameSaved = "";
    }
    if (state === "backgroundSaved") {
      updatedState.active = "name";
      updatedState.nameSaved = "";
      updatedState.backgroundSaved = "";
    }
    if (state === "avatar") {
      updatedState.active = "backgroundSaved";
      updatedState.backgroundSaved = "";
      updatedState.avatar = blank;
    }
    if (state === "attributes") {
      updatedState.active = "avatar";
      updatedState.avatar = blank;
    }
    if (state === "skills") {
      updatedState.active = "attributes";
    }
    if (state === "traits") {
      updatedState.active = "skills";
      updatedState.traits = [];
    }
    if (state === "story") {
      updatedState.active = "traits";
      updatedState.story = "";
    }
    this.setState({
      ...this.state,
      active: updatedState.active,
      updatedState
    });
  };

  modalClose = () => {
    this.setState({
      modal: { show: false }
    });
  };

  handleClassSelect = e => {
    let updatedState = { ...this.state };
    switch (e.target.id) {
      case "Warrior":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        this.props.attr["strength"]++;
        this.props.attr["toughness"]++;
        updatedState.skills.intimidation = true;
        break;
      case "Wizard":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        this.props.attr["intelligence"] = this.props.attr["intelligence"] + 2;
        updatedState.skills.arcana = true;
        break;
      case "Rogue":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        this.props.attr["dexterity"] = this.props.attr["dexterity"] + 2;
        updatedState.skills.stealth = true;
        break;
      case "Cleric":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        this.props.attr["willpower"] = this.props.attr["willpower"] + 2;
        updatedState.skills.religion = true;
        break;
      case "Ranger":
        updatedState.active = "name";
        updatedState.class = e.target.id;
        this.props.attr["dexterity"]++;
        this.props.attr["toughness"]++;
        updatedState.skills.nature = true;
        break;
      default:
        return;
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

  handleBackgroundSubmit = (bgd, e) => {
    e.preventDefault();
    if (bgd === "") {
      this.setState({
        ...this.state,
        modal: {
          ...this.state.modal,
          show: true,
          message: "My friend, choose a background!"
        }
      });
    } else {
      let updatedState = { ...this.state };
      let updatedSkills = updatedState.skills;
      switch (bgd) {
        case "Commoner":
          updatedState.active = "avatar";
          updatedSkills.athletics = true;
          updatedSkills.crafting = true;
          break;
        case "Courtier":
          updatedState.active = "avatar";
          updatedSkills.deception = true;
          updatedSkills.persuasion = true;
          break;
        case "Criminal":
          updatedState.active = "avatar";
          if (this.state.class === "Warrior") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedSkills.intimidation = true;
          }
          updatedSkills.trickery = true;
          break;
        case "Entertainer":
          updatedState.active = "avatar";
          updatedSkills.athletics = true;
          updatedSkills.performance = true;
          break;
        case "Investigator":
          updatedState.active = "avatar";
          updatedSkills.investigation = true;
          updatedSkills.perception = true;
          break;
        case "Outlander":
          updatedState.active = "avatar";
          if (this.state.class === "Ranger") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedSkills.nature = true;
          }
          updatedSkills.survival = true;
          break;
        case "Sage":
          updatedState.active = "avatar";
          if (this.state.class === "Wizard") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedSkills.arcana = true;
          }
          updatedSkills.history = true;
          break;
        case "Soldier":
          updatedState.active = "avatar";
          if (this.state.class === "Warrior") {
            updatedState.skillsPool = updatedState.skillsPool + 1;
          } else {
            updatedSkills.intimidation = true;
          }
          updatedSkills.athletics = true;
          break;
        default:
          return;
      }
      this.setState({
        ...this.state,
        active: "avatar",
        backgroundSaved: bgd,
        skills: updatedSkills,
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

  applyChangesAttributes = () => {
    if (this.props.attrPool <= 0) {
      this.setState({
        ...this.state,
        active: "skills"
      });
    } else {
      this.setState({
        modal: {
          ...this.state.modal,
          show: true,
          message: "You still have points left to spend!"
        }
      });
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
      this.setState({
        modal: {
          ...this.state.modal,
          show: true,
          message: "You have skill points left to spend!"
        }
      });
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

  applyChangesStory = (e, story) => {
    e.preventDefault();
    this.setState({
      active: "summary",
      story
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
            <Modal modal={this.state.modal} clicked={this.modalClose} />
            <Steps
              active={this.state.active}
              undo={this.handleBack}
              passAppState={this.passAppState}
              selectGender={this.props.onGenderSelect}
              selectRace={this.props.onRaceSelect}
              selectClass={this.handleClassSelect}
              submitName={this.handleNameSubmit}
              submitBackground={this.handleBackgroundSubmit}
              gender={this.state.gender}
              race={this.props.race}
              selectPortrait={this.handlePortraitSelect}
              attributes={this.props.attr}
              pool={this.props.attrPool}
              increment={this.props.onAttributeIncrease}
              decrement={this.props.onAttributeDecrease}
              skills={this.state.skills}
              skillsPool={this.state.skillsPool}
              submitSkills={this.handleSkillsSubmit}
              applyAttributes={this.applyChangesAttributes}
              applySkills={this.applyChangesSkills}
              applyTraits={this.applyChangesTraits}
              applyStory={this.applyChangesStory}
            />
          </Route>
        </Switch>

        <CharSheet
          active={this.props.active}
          gender={this.props.gender}
          race={this.props.race}
          class={this.state.class}
          name={this.state.nameSaved}
          avatar={this.state.avatar}
          background={this.state.backgroundSaved}
          attributes={this.props.attr}
          skills={this.state.skills}
          traits={this.state.traits}
          story={this.state.story}
        />
        <div className={[styles.RibbonNew, this.state.active === "summary" ? styles.drawRibbonsNew : null].join(" ")}>
          New Character
        </div>
        <div className={[styles.RibbonSave, this.state.active === "summary" ? styles.drawRibbonsSave : null].join(" ")}>
          Save Character
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gender: state.gender,
    race: state.race,
    attr: state.attributes,
    attrPool: state.attributesPool
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGenderSelect: gender => {
      dispatch({
        type: actionTypes.SELECT_GENDER,
        gender: gender
      });
    },
    onRaceSelect: race =>
      dispatch({
        type: actionTypes.SELECT_RACE,
        race: race
      }),
    onAttributeIncrease: attrName =>
      dispatch({
        type: actionTypes.INCREASE_ATTRIBUTE,
        attributeName: attrName
      }),
    onAttributeDecrease: attrName =>
      dispatch({
        type: actionTypes.DECREASE_ATTRIBUTE,
        attributeName: attrName
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
