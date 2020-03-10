import * as actionTypes from "./actions";
import blank from "../images/blank_01.png";

const initialState = {
  active: "start",
  gender: "",
  race: "",
  class: "",
  nameSaved: "",
  background: "",
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
  story: "",
  modal: {
    show: false,
    message: "Alert"
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PASS_STATE:
      return {
        ...state,
        active: action.active
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          show: false
        }
      };
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
    case actionTypes.SELECT_CLASS:
      switch (action.class) {
        case "Warrior":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              strength: state.attributes.strength + 1,
              toughness: state.attributes.toughness + 1
            },
            skills: {
              ...state.skills,
              intimidation: true
            }
          };
        case "Wizard":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              intelligence: state.attributes.intelligence + 2
            },
            skills: {
              ...state.skills,
              arcana: true
            }
          };
        case "Rogue":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 2
            },
            skills: {
              ...state.skills,
              stealth: true
            }
          };
        case "Cleric":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              willpower: state.attributes.willpower + 2
            },
            skills: {
              ...state.skills,
              religion: true
            }
          };
        case "Ranger":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 1,
              toughness: state.attributes.toughness + 1
            },
            skills: {
              ...state.skills,
              nature: true
            }
          };
        default:
          return state;
      }
    case actionTypes.SUBMIT_NAME:
      return {
        ...state,
        active: "background",
        name: action.name
      };
    case actionTypes.SELECT_BACKGROUND:
      console.log(action.event);
      action.event.preventDefault();
      if (!action.background) {
        return {
          ...state,
          modal: {
            ...state.modal,
            show: true,
            message: "My friend, choose a background!"
          }
        };
      } else {
        switch (action.background) {
          case "Commoner":
            return {
              ...state,
              active: "avatar",
              background: action.background,
              skills: {
                ...state.skills,
                athletics: true,
                crafting: true
              }
            };
          case "Courtier":
            return {
              ...state,
              active: "avatar",
              background: action.background,
              skills: {
                ...state.skills,
                deception: true,
                persuasion: true
              }
            };
          case "Criminal":
            if (state.class === "Warrior") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { athletics: true },
                skillsPool: state.skillsPool + 1
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { intimidation: true, trickery: true }
              };
            }
          case "Entertainer":
            return {
              ...state,
              active: "avatar",
              background: action.background,
              skills: {
                ...state.skills,
                athletics: true,
                performance: true
              }
            };
          case "Investigator":
            return {
              ...state,
              active: "avatar",
              background: action.background,
              skills: {
                ...state.skills,
                investigation: true,
                perception: true
              }
            };
          case "Outlander":
            if (state.class === "Ranger") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { survival: true },
                skillsPool: state.skillsPool + 1
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { nature: true, survival: true }
              };
            }
          case "Sage":
            if (state.class === "Wizard") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { history: true },
                skillsPool: state.skillsPool + 1
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { arcana: true, history: true }
              };
            }
          case "Soldier":
            if (state.class === "Warrior") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { athletics: true },
                skillsPool: state.skillsPool + 1
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: { ...state.skills, athletics: true, intimidation: true }
              };
            }
          default:
            return;
        }
      }
    case actionTypes.SELECT_AVATAR:
      return {
        ...state,
        active: "attributes",
        avatar: action.avatar
      };
    case actionTypes.INCREASE_ATTRIBUTE:
      if (state.attributes[action.attributeName] <= 19 && state.attributesPool >= 1) {
        return {
          ...state,
          active: "attributes",
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
    case actionTypes.APPLY_ATTRIBUTES:
      if (state.attributesPool <= 0) {
        return {
          ...state,
          active: "skills"
        };
      } else {
        return {
          ...state,
          modal: {
            ...state.modal,
            show: true,
            message: "You still have points left to spend!"
          }
        };
      }
    default:
      return state;
  }
};

export default reducer;
