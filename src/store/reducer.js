import * as actionTypes from "./actions";
import blank from "../images/blank_01.png";

const initialState = {
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
  attributesPool: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_GENDER:
      if (action.gender === "female") {
        return {
          ...state,
          active: "race",
          gender: "Female"
        };
      } else if (action.gender === "male") {
        return {
          ...state,
          active: "race",
          gender: "Male"
        };
      }
      break;
    case actionTypes.SELECT_RACE:
      switch (action.race) {
        case "Human":
          return {
            ...state,
            active: "class",
            race: action.race,
            attributes: {
              ...state.attributes,
              willpower: state.attributes.willpower - 1
            },
            attributesPool: state.attributesPool + 1
          };
        case "Elf":
          return {
            ...state,
            active: "class",
            race: action.race,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 1,
              intelligence: state.attributes.intelligence + 1,
              toughness: state.attributes.toughness - 1
            }
          };
        case "Dwarf":
          return {
            ...state,
            active: "class",
            race: action.race,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity - 1,
              strength: state.attributes.strength + 1,
              toughness: state.attributes.toughness + 1
            }
          };
        case "Halfling":
          return {
            ...state,
            active: "class",
            race: action.race,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 1,
              strength: state.attributes.strength - 1,
              willpower: state.attributes.willpower + 1
            }
          };
        case "Tiefling":
          return {
            ...state,
            active: "class",
            race: action.race,
            attributes: {
              ...state.attributes,
              charisma: state.attributes.charisma + 1,
              intelligence: state.attributes.intelligence + 1,
              willpower: state.attributes.willpower - 1
            }
          };
        default:
          return state;
      }
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
    default:
      return state;
  }
};

export default reducer;
