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
import Spinner from "../components/Spinner/Spinner";
// import ErrorHandler from "../containers/ErrorHandler";
import styles from "../App.module.scss";

class Content extends Component {
  state = {
    active: this.props.active,
    modal: {
      show: this.props.modal.show,
      message: "Alert"
    }
  };

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Menu}>
          <Header />
          <Nav />
        </div>
        {this.props.loading ? <Spinner /> : null}
        <Switch>
          <Route path="/saved" exact>
            <SavedChars />
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

const mapStateToProps = state => {
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
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPassState: active => {
      dispatch({
        type: actionTypes.PASS_STATE,
        active: active
      });
    },
    onModalClose: () =>
      dispatch({
        type: actionTypes.CLOSE_MODAL
      }),
    onMoveBack: () => {
      dispatch({
        type: actionTypes.MOVE_BACK
      });
    },
    onGenderSelect: gender => {
      dispatch({
        type: actionTypes.SELECT_GENDER,
        gender: gender
      });
    },
    onRaceSelect: races =>
      dispatch({
        type: actionTypes.SELECT_RACE,
        race: races
      }),
    onClassSelect: classes =>
      dispatch({
        type: actionTypes.SELECT_CLASS,
        class: classes
      }),
    onNameSubmit: name =>
      dispatch({
        type: actionTypes.SUBMIT_NAME,
        name: name
      }),
    onBackgroundSelect: (bgd, e) =>
      dispatch({
        type: actionTypes.SELECT_BACKGROUND,
        background: bgd,
        event: e
      }),
    onAvatarSelect: avatar =>
      dispatch({
        type: actionTypes.SELECT_AVATAR,
        avatar: avatar
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
      }),
    onApplyAttributes: () =>
      dispatch({
        type: actionTypes.APPLY_ATTRIBUTES
      }),
    onApplySkills: (skills, pool) =>
      dispatch({
        type: actionTypes.APPLY_SKILLS,
        skills: skills,
        skillsPool: pool
      }),
    onApplyTraits: traits =>
      dispatch({
        type: actionTypes.APPLY_TRAITS,
        traits: traits
      }),
    onApplyStory: (e, story) => {
      dispatch({
        type: actionTypes.APPLY_STORY,
        story: story,
        event: e
      });
    },
    onNewCharacter: () => {
      dispatch({
        type: actionTypes.NEW_CHARACTER
      });
    },
    onSaveCharacter: () => {
      dispatch({
        type: actionTypes.SAVE_CHARACTER
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
