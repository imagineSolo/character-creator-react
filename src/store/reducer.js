import * as actionTypes from "./actions";

const initialState = {
  attributes: {
    strength: 10,
    dexterity: 10,
    toughness: 10,
    intelligence: 10,
    willpower: 10,
    charisma: 10
  },
  attributesPool: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_ATTRIBUTE:
      if (state.attributes[action.attributeName] <= 19 && state.attributesPool >= 1) {
        return {
          ...state,
          attributes: {
            ...state.attributes,
            [action.attributeName]: state.attributes[action.attributeName] + 1
          },
          attributesPool: state.attributesPool - 1
        };
      } else {
        return state;
      }
    case actionTypes.DECREASE_ATTRIBUTE:
      if (state.attributes[action.attributeName] >= 4) {
        return {
          ...state,
          attributes: {
            ...state.attributes,
            [action.attributeName]: state.attributes[action.attributeName] - 1
          },
          attributesPool: state.attributesPool + 1
        };
      } else {
        return state;
      }
    case actionTypes.SELECT_RACE:
      let updatedState = { ...this.state };
      let updatedAttributes = updatedState.attributes;
      switch (action.race) {
        case "Human":
          updatedState.active = "class";
          updatedState.race = action.race;
          updatedState.attributesPool = updatedState.attributesPool + 2;
          updatedAttributes = updatedAttributes.willpower - 1;
          break;
        case "Elf":
          updatedState.active = "class";
          updatedState.race = action.race;
          updatedAttributes = updatedAttributes.dexterity + 1;
          updatedAttributes = updatedAttributes.intelligence + 1;
          updatedAttributes = updatedAttributes.toughness - 1;
          break;
        case "Dwarf":
          updatedState.active = "class";
          updatedState.race = action.race;
          updatedAttributes = updatedAttributes.dexterity - 1;
          updatedAttributes = updatedAttributes.strength + 1;
          updatedAttributes = updatedAttributes.toughness + 1;
          break;
        case "Halfling":
          updatedState.active = "class";
          updatedState.race = action.race;
          updatedAttributes = updatedAttributes.dexterity + 1;
          updatedAttributes = updatedAttributes.willpower + 1;
          updatedAttributes = updatedAttributes.strength - 1;
          break;
        case "Tiefling":
          updatedState.active = "class";
          updatedState.race = action.race;
          updatedAttributes = updatedAttributes.charisma + 1;
          updatedAttributes = updatedAttributes.intelligence + 1;
          updatedAttributes = updatedAttributes.willpower - 1;
          break;
        default:
          return;
      }
      this.setState({
        ...this.state,
        active: "class",
        race: action.race,
        attributes: updatedAttributes,
        updatedState
      });
      break;
    default:
      return state;
  }
};

export default reducer;
