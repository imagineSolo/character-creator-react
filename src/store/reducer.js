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
  console.log(action);
  switch (action.type) {
    case actionTypes.INCREASE_ATTRIBUTE:
      if (
        state.attributes[action.attributeName] <= 19 &&
        state.attributesPool >= 1
      ) {
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
