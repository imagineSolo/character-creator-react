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
        this.props.attr["willpower"]--;
        break;
      case "Elf":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        this.props.attr["dexterity"]++;
        this.props.attr["intelligence"]++;
        this.props.attr["toughness"]--;
        break;
      case "Dwarf":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        this.props.attr["dexterity"]--;
        this.props.attr["strength"]++;
        this.props.attr["toughness"]++;
        break;
      case "Halfling":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        this.props.attr["dexterity"]++;
        this.props.attr["willpower"]++;
        this.props.attr["strength"]--;
        break;
      case "Tiefling":
        updatedState.active = "class";
        updatedState.race = e.target.id;
        this.props.attr["charisma"]++;
        this.props.attr["intelligence"]++;
        this.props.attr["willpower"]--;
        break;
      default:
        return;
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

  handleBackgroundSubmit = (prof, e) => {
    e.preventDefault();
    if (prof === "") {
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
          return;
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

  // handleIncreaseAttribute = attr => {
  //   let updatedState = { ...this.state };
  //   if (attr === "strength" && updatedState.attributes.strength <= 19 && updatedState.attributesPool >= 1) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           strength: this.state.attributes.strength + 1
  //         },
  //         attributesPool: prevState.attributesPool - 1
  //       };
  //     });
  //   } else if (attr === "dexterity" && updatedState.attributes.dexterity <= 19 && updatedState.attributesPool >= 1) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           dexterity: this.state.attributes.dexterity + 1
  //         },
  //         attributesPool: prevState.attributesPool - 1
  //       };
  //     });
  //   } else if (attr === "toughness" && updatedState.attributes.toughness <= 19 && updatedState.attributesPool >= 1) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           toughness: this.state.attributes.toughness + 1
  //         },
  //         attributesPool: prevState.attributesPool - 1
  //       };
  //     });
  //   } else if (
  //     attr === "intelligence" &&
  //     updatedState.attributes.intelligence <= 19 &&
  //     updatedState.attributesPool >= 1
  //   ) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           intelligence: this.state.attributes.intelligence + 1
  //         },
  //         attributesPool: prevState.attributesPool - 1
  //       };
  //     });
  //   } else if (attr === "willpower" && updatedState.attributes.willpower <= 19 && updatedState.attributesPool >= 1) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           willpower: this.state.attributes.willpower + 1
  //         },
  //         attributesPool: prevState.attributesPool - 1
  //       };
  //     });
  //   } else if (attr === "charisma" && updatedState.attributes.charisma <= 19 && updatedState.attributesPool >= 1) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           charisma: this.state.attributes.charisma + 1
  //         },
  //         attributesPool: prevState.attributesPool - 1
  //       };
  //     });
  //   }
  // };

  // handleDecreaseAttribute = attr => {
  //   let updatedState = { ...this.state };
  //   if (attr === "strength" && updatedState.attributes.strength >= 4) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           strength: this.state.attributes.strength - 1
  //         },
  //         attributesPool: prevState.attributesPool + 1
  //       };
  //     });
  //   } else if (attr === "dexterity" && updatedState.attributes.dexterity >= 4) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           dexterity: this.state.attributes.dexterity - 1
  //         },
  //         attributesPool: prevState.attributesPool + 1
  //       };
  //     });
  //   } else if (attr === "toughness" && updatedState.attributes.toughness >= 4) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           toughness: this.state.attributes.toughness - 1
  //         },
  //         attributesPool: prevState.attributesPool + 1
  //       };
  //     });
  //   } else if (attr === "intelligence" && updatedState.attributes.intelligence >= 4) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           intelligence: this.state.attributes.intelligence - 1
  //         },
  //         attributesPool: prevState.attributesPool + 1
  //       };
  //     });
  //   } else if (attr === "willpower" && updatedState.attributes.willpower >= 4) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           willpower: this.state.attributes.willpower - 1
  //         },
  //         attributesPool: prevState.attributesPool + 1
  //       };
  //     });
  //   } else if (attr === "charisma" && updatedState.attributes.charisma >= 4) {
  //     this.setState(prevState => {
  //       return {
  //         updatedState,
  //         attributes: {
  //           ...this.state.attributes,
  //           charisma: this.state.attributes.charisma - 1
  //         },
  //         attributesPool: prevState.attributesPool + 1
  //       };
  //     });
  //   }
  // };

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
            <Modal modal={this.state.modal} />
            <Steps
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
          active={this.state.active}
          gender={this.state.gender}
          race={this.state.race}
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
    attr: state.attributes,
    attrPool: state.attributesPool
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
