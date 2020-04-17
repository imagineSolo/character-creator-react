import * as actionTypes from "../actions/steps";
import blank from "../../images/blank_01.png";

const initialState = {
  gender: "",
  race: "",
  class: "",
  name: "",
  background: "",
  avatar: blank,
  attributes: {
    strength: 10,
    dexterity: 10,
    toughness: 10,
    intelligence: 10,
    willpower: 10,
    charisma: 10,
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
    trickery: false,
  },
  skillsPool: 3,
  traits: [],
  story: "",
  loading: false,
  saving: false,
};

const steps = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVE_BACK:
      switch (action.active) {
        case "gender":
          return { ...state, gender: "" };
        case "race":
          return { ...state, race: "" };
        case "class":
          return { ...state, class: "" };
        case "name":
          return { ...state, name: "" };
        case "background":
          return { ...state, background: "" };
        case "avatar":
          return { ...state, avatar: blank };
        case "attributes":
          return { ...state };
        case "skills":
          return { ...state, skillsPool: 0 };
        case "traits":
          return { ...state, traits: [] };
        case "story":
          return { ...state, story: "" };
        default:
          return state;
      }
    case actionTypes.SELECT_GENDER:
      return { ...state, gender: action.gender };
    case actionTypes.SELECT_RACE:
      switch (action.race) {
        case "Human":
          return {
            ...state,
            race: action.race,
            attributes: {
              ...state.attributes,
              willpower: state.attributes.willpower - 1,
            },
            attributesPool: state.attributesPool + 1,
          };
        case "Elf":
          return {
            ...state,
            race: action.race,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 1,
              intelligence: state.attributes.intelligence + 1,
              toughness: state.attributes.toughness - 1,
            },
          };
        case "Dwarf":
          return {
            ...state,
            race: action.race,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity - 1,
              strength: state.attributes.strength + 1,
              toughness: state.attributes.toughness + 1,
            },
          };
        case "Halfling":
          return {
            ...state,
            race: action.race,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 1,
              strength: state.attributes.strength - 1,
              willpower: state.attributes.willpower + 1,
            },
          };
        case "Tiefling":
          return {
            ...state,
            race: action.race,
            attributes: {
              ...state.attributes,
              charisma: state.attributes.charisma + 1,
              intelligence: state.attributes.intelligence + 1,
              willpower: state.attributes.willpower - 1,
            },
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
              toughness: state.attributes.toughness + 1,
            },
            skills: {
              ...state.skills,
              intimidation: true,
            },
          };
        case "Wizard":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              intelligence: state.attributes.intelligence + 2,
            },
            skills: {
              ...state.skills,
              arcana: true,
            },
          };
        case "Rogue":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 2,
            },
            skills: {
              ...state.skills,
              stealth: true,
            },
          };
        case "Cleric":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              willpower: state.attributes.willpower + 2,
            },
            skills: {
              ...state.skills,
              religion: true,
            },
          };
        case "Ranger":
          return {
            ...state,
            active: "name",
            class: action.class,
            attributes: {
              ...state.attributes,
              dexterity: state.attributes.dexterity + 1,
              toughness: state.attributes.toughness + 1,
            },
            skills: {
              ...state.skills,
              nature: true,
            },
          };
        default:
          return state;
      }
    case actionTypes.SUBMIT_NAME:
      return { ...state, active: "background", name: action.name };
    case actionTypes.SELECT_BACKGROUND:
      action.event.preventDefault();
      if (!action.background) {
        return {
          ...state,
          modal: {
            ...state.modal,
            show: true,
            message: "My friend, choose a background!",
          },
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
                crafting: true,
              },
            };
          case "Courtier":
            return {
              ...state,
              active: "avatar",
              background: action.background,
              skills: {
                ...state.skills,
                deception: true,
                persuasion: true,
              },
            };
          case "Criminal":
            if (state.class === "Warrior") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  athletics: true,
                },
                skillsPool: state.skillsPool + 1,
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  intimidation: true,
                  trickery: true,
                },
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
                performance: true,
              },
            };
          case "Investigator":
            return {
              ...state,
              active: "avatar",
              background: action.background,
              skills: {
                ...state.skills,
                investigation: true,
                perception: true,
              },
            };
          case "Outlander":
            if (state.class === "Ranger") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  survival: true,
                },
                skillsPool: state.skillsPool + 1,
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  nature: true,
                  survival: true,
                },
              };
            }
          case "Sage":
            if (state.class === "Wizard") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  history: true,
                },
                skillsPool: state.skillsPool + 1,
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  arcana: true,
                  history: true,
                },
              };
            }
          case "Soldier":
            if (state.class === "Warrior") {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  athletics: true,
                },
                skillsPool: state.skillsPool + 1,
              };
            } else {
              return {
                ...state,
                active: "avatar",
                background: action.background,
                skills: {
                  ...state.skills,
                  athletics: true,
                  intimidation: true,
                },
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
        avatar: action.avatar,
      };
    case actionTypes.INCREASE_ATTRIBUTE:
      if (state.attributes[action.attributeName] <= 19 && state.attributesPool >= 1) {
        return {
          ...state,
          attributes: {
            ...state.attributes,
            [action.attributeName]: state.attributes[action.attributeName] + 1,
          },
          attributesPool: state.attributesPool - 1,
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
            [action.attributeName]: state.attributes[action.attributeName] - 1,
          },
          attributesPool: state.attributesPool + 1,
        };
      } else {
        return state;
      }
    case actionTypes.APPLY_ATTRIBUTES:
      if (state.attributesPool <= 0) {
        return {
          ...state,
          active: "skills",
        };
      } else {
        return {
          ...state,
          modal: {
            ...state.modal,
            show: true,
            message: "You still have points left to spend!",
          },
        };
      }
    case actionTypes.APPLY_SKILLS:
      const handleAddSkills = (skills) => {
        let newSkills = {};
        for (let key in skills) {
          if (skills[key]) {
            newSkills[key] = true;
          }
        }
        return newSkills;
      };
      const addedSkills = handleAddSkills(action.skills);
      if (action.skillsPool <= 0) {
        return {
          ...state,
          active: "traits",
          skills: {
            ...state.skills,
            ...addedSkills,
          },
        };
      } else {
        return {
          ...state,
          modal: {
            ...state.modal,
            show: true,
            message: "You have skill points left to spend!",
          },
        };
      }
    case actionTypes.APPLY_TRAITS:
      return { ...state, active: "story", traits: action.traits };
    case actionTypes.APPLY_STORY:
      action.event.preventDefault();
      return { ...state, active: "summary", story: action.story };
    case actionTypes.NEW_CHARACTER:
      return state;
    case actionTypes.SAVE_CHARACTER:
      return {
        ...state,
        active: "saved",
        loading: false,
        saving: true,
      };
    case actionTypes.DISPLAY_CHARACTER:
      return {
        ...state,
        gender: action.info.gender,
        race: action.info.race,
        class: action.info.class,
        name: action.info.name,
        background: action.info.background,
        avatar: action.info.avatar,
        attributes: action.info.attributes,
        skills: action.info.skills,
        traits: action.info.traits,
        story: action.info.story,
      };
    case actionTypes.DELETE_CHARACTER:
      // axios
      //   .delete(`/characters/${action.char}.json`)
      //   .then(() => ({ ...state, loading: true }))
      //   .then()
      //   .catch((error) => console.log(error));
      return {
        ...state,
        gender: "",
        race: "",
        class: "",
        name: "",
        background: "",
        avatar: blank,
        attributes: {
          strength: 10,
          dexterity: 10,
          toughness: 10,
          intelligence: 10,
          willpower: 10,
          charisma: 10,
        },
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
          trickery: false,
        },
        traits: [],
        story: "",
        loading: false,
      };
    default:
      return state;
  }
};

export default steps;
