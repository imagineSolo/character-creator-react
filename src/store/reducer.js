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
      return {
        ...state,
        attributes: {
          ...state.attributes,
          [action.attributeName]: state.attributes[action.attributeName] + 1
        }
      };
    case actionTypes.DECREASE_ATTRIBUTE:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          [action.attributeName]: state.attributes[action.attributeName] - 1
        }
      };
    default:
      return state;
  }
};

export default reducer;
