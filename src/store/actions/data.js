export const NEW_CHARACTER = "NEW_CHARACTER";
export const SAVE_CHARACTER = "SAVE_CHARACTER";
export const DISPLAY_CHARACTER = "DISPLAY_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export const newCharacter = () => {
  return {
    type: NEW_CHARACTER,
  };
};

export const saveCharacter = () => {
  return {
    type: SAVE_CHARACTER,
  };
};

export const displayCharacter = (char) => {
  return {
    type: DISPLAY_CHARACTER,
    info: char,
  };
};

export const deleteCharacter = (char) => {
  return {
    type: DELETE_CHARACTER,
    char: char,
  };
};
