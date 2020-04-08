import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { passState, closeModal, moveBack } from "../store/actions/ui";
import {
  selectGender,
  selectRace,
  selectClass,
  submitName,
  selectBackground,
  selectAvatar,
  increaseAttribute,
  decreaseAttribute,
  applyAttributes,
  applySkills,
  applyTraits,
  applyStory,
} from "../store/actions/steps";
import { newCharacter, saveCharacter, displayCharacter, deleteCharacter } from "../store/actions/data";

import Modal from "../components/Modal/Modal";
import Header from "./Header";
import Nav from "./Nav";
import CharSheet from "./CharSheet";
import Steps from "./Steps";
import SavedChars from "./SavedChars";
import Spinner from "../components/Spinner/Spinner";
// import ErrorHandler from "../containers/ErrorHandler";
import styles from "../App.module.scss";

class Content extends Component {
  state = {
    active: this.props.active,
    modal: {
      show: this.props.modal.show,
      message: "Alert",
    },
  };

  render() {
    if (this.props.saving === true) {
      return <Redirect to="/saved" />;
    }

    return (
      <div className={styles.App}>
        <div className={styles.Menu}>
          <Header />
          <Nav />
        </div>
        {this.props.loading ? <Spinner /> : null}
        <Switch>
          <Route path="/saved" exact>
            <SavedChars display={this.props.onCharacterDisplay} delete={this.props.onCharacterDelete} />
          </Route>
          <Route path="/" exact>
            <Modal modal={this.props.modal} clicked={this.props.onModalClose} />
            <Steps
              active={this.props.active}
              undo={this.props.onMoveBack}
              passAppState={this.props.onPassState}
              selectGender={this.props.onGenderSelect}
              selectRace={this.props.onRaceSelect}
              selectClass={this.props.onClassSelect}
              submitName={this.props.onNameSubmit}
              submitBackground={this.props.onBackgroundSelect}
              gender={this.props.gender}
              race={this.props.race}
              selectPortrait={this.props.onAvatarSelect}
              attributes={this.props.attr}
              pool={this.props.attrPool}
              increment={this.props.onAttributeIncrease}
              decrement={this.props.onAttributeDecrease}
              skills={this.props.skills}
              skillsPool={this.props.skillsPool}
              submitSkills={this.handleSkillsSubmit}
              applyAttributes={this.props.onApplyAttributes}
              applySkills={this.props.onApplySkills}
              applyTraits={this.props.onApplyTraits}
              applyStory={this.props.onApplyStory}
            />
          </Route>
        </Switch>

        <CharSheet
          active={this.props.active}
          gender={this.props.gender}
          race={this.props.race}
          class={this.props.class}
          name={this.props.name}
          avatar={this.props.avatar}
          background={this.props.background}
          attributes={this.props.attr}
          skills={this.props.skills}
          traits={this.props.traits}
          story={this.props.story}
        />
        <div
          className={[styles.RibbonNew, this.props.active === "summary" ? styles.drawRibbonsNew : null].join(" ")}
          onClick={this.props.onNewCharacter}
        >
          <a href="/">New Character</a>
        </div>
        <div
          className={[styles.RibbonSave, this.props.active === "summary" ? styles.drawRibbonsSave : null].join(" ")}
          onClick={this.props.onSaveCharacter}
        >
          Save Character
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.active,
    modal: state.modal,
    gender: state.gender,
    race: state.race,
    class: state.class,
    name: state.name,
    background: state.background,
    avatar: state.avatar,
    attr: state.attributes,
    attrPool: state.attributesPool,
    skills: state.skills,
    skillsPool: state.skillsPool,
    traits: state.traits,
    story: state.story,
    loading: state.loading,
    saving: state.saving,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPassState: (active) => dispatch(passState(active)),
    onModalClose: () => dispatch(closeModal()),
    onMoveBack: () => dispatch(moveBack()),
    onGenderSelect: (gender) => dispatch(selectGender(gender)),
    onRaceSelect: (races) => dispatch(selectRace(races)),
    onClassSelect: (classes) => dispatch(selectClass(classes)),
    onNameSubmit: (name) => dispatch(submitName(name)),
    onBackgroundSelect: (bgd, e) => dispatch(selectBackground(bgd, e)),
    onAvatarSelect: (avatar) => dispatch(selectAvatar(avatar)),
    onAttributeIncrease: (attrName) => dispatch(increaseAttribute(attrName)),
    onAttributeDecrease: (attrName) => dispatch(decreaseAttribute(attrName)),
    onApplyAttributes: () => dispatch(applyAttributes()),
    onApplySkills: (skills, pool) => dispatch(applySkills(skills, pool)),
    onApplyTraits: (traits) => dispatch(applyTraits(traits)),
    onApplyStory: (e, story) => dispatch(applyStory(e, story)),
    onNewCharacter: () => dispatch(newCharacter()),
    onSaveCharacter: () => dispatch(saveCharacter()),
    onCharacterDisplay: (char) => dispatch(displayCharacter(char)),
    onCharacterDelete: (char) => dispatch(deleteCharacter(char)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
