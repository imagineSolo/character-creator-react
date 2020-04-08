export const SELECT_GENDER = "SELECT_GENDER";
export const SELECT_RACE = "SELECT_RACE";
export const SELECT_CLASS = "SELECT_CLASS";
export const SUBMIT_NAME = "SUBMIT_NAME";
export const SELECT_BACKGROUND = "SELECT_BACKGROUND";
export const SELECT_AVATAR = "SELECT_AVATAR";
export const INCREASE_ATTRIBUTE = "INCREASE_ATTRIBUTE";
export const DECREASE_ATTRIBUTE = "DECREASE_ATTRIBUTE";
export const APPLY_ATTRIBUTES = "APPLY_ATTRIBUTES";
export const APPLY_SKILLS = "APPLY_SKILLS";
export const APPLY_TRAITS = "APPLY_TRAITS";
export const APPLY_STORY = "APPLY_STORY";

export const selectGender = (gndr) => {
  return {
    type: SELECT_GENDER,
    gender: gndr,
  };
};

export const selectRace = (race) => {
  return {
    type: SELECT_RACE,
    race: race,
  };
};

export const selectClass = (cl) => {
  return {
    type: SELECT_CLASS,
    class: cl,
  };
};

export const submitName = (name) => {
  return {
    type: SUBMIT_NAME,
    name: name,
  };
};

export const selectBackground = (bgd, e) => {
  return {
    type: SELECT_BACKGROUND,
    background: bgd,
    event: e,
  };
};

export const selectAvatar = (av) => {
  return {
    type: SELECT_AVATAR,
    avatar: av,
  };
};

export const increaseAttribute = (attrName) => {
  return {
    type: INCREASE_ATTRIBUTE,
    attributeName: attrName,
  };
};

export const decreaseAttribute = (attrName) => {
  return {
    type: DECREASE_ATTRIBUTE,
    attributeName: attrName,
  };
};

export const applyAttributes = () => {
  return {
    type: APPLY_ATTRIBUTES,
  };
};

export const applySkills = (skills, pool) => {
  return {
    type: APPLY_SKILLS,
    skills: skills,
    skillsPool: pool,
  };
};

export const applyTraits = (traits) => {
  return {
    type: APPLY_TRAITS,
    traits: traits,
  };
};

export const applyStory = (story, e) => {
  return {
    type: APPLY_STORY,
    story: story,
    event: e,
  };
};
