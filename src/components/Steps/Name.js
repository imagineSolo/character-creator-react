import React from "react";
import ButtonUndo from "../Button/Undo";

const name = props => {
  return (
    <div>
      <p>Choose a name:</p>
      <form>
        <input
          type="text"
          value={props.value}
          placeholder="My name is..."
          required
          minlength="2"
          maxlength="18"
          autofocus
          onChange={props.submit}
        />
        <button onClick={props.submit}>Submit Name</button>
      </form>
      <ButtonUndo undo={props.undo} />
    </div>
  );
};

export default name;
